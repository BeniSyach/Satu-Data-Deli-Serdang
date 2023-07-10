import getConfig from "next/config";
import React, { useContext, useState } from "react";
import {
  CKAN,
  DatasetSearchForm,
  ListOfDatasets,
  PackageSearchOptions,
  Organization,
  Group,
} from "@portaljs/ckan";

const dms = getConfig().publicRuntimeConfig.DMS;
const backend_url = getConfig().publicRuntimeConfig.DMS;

const formatter = new Intl.DateTimeFormat(["ban", "id"], {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export async function getServerSideProps() {
  const getDataOrganisasi = await fetch(
    `${dms}/api/3/action/organization_list?all_fields=true`
  );
  const DataOrganisasi = await getDataOrganisasi.json();
  const Organisasi = DataOrganisasi.result;

  const getDataGrup = await fetch(
    `${dms}/api/3/action/group_list?all_fields=true`
  );
  const DataGrup = await getDataGrup.json();
  const Grup = DataGrup.result;

  const getDataTags = await fetch(
    `${dms}/api/3/action/tag_list?all_fields=true`
  );
  const dataTags = await getDataTags.json();
  const Tags = dataTags.result;

  const ckan = new CKAN(backend_url);
  const groups = await ckan.getGroupsWithDetails();
  const orgs = await ckan.getOrgsWithDetails();

  return {
    props: {
      organisasi: Organisasi,
      grup: Grup,
      tags: Tags,
      groups,
      orgs,
    },
  };
}

export default function datasetsPage({
  orgs,
  groups,
  organisasi,
  grup,
  tags,
}: {
  orgs: Organization[];
  groups: Group[];
  datasets: any;
  organisasi: any;
  grup: any;
  tags: any;
}) {
  const [selectedGrup, setSelectedGrup] = useState("");
  const [selectedOrganisasi, setSelectedOrganisasi] = useState("");

  const handleSetSelectedGrup = (event) => {
    setSelectedGrup(event.target.value);
  };

  const handleSetSelectedOrganisasi = (event) => {
    setSelectedOrganisasi(event.target.value);
  };

  const ckan = new CKAN(backend_url);
  const [options, setOptions] = useState<PackageSearchOptions>({
    offset: 0,
    limit: 5,
    tags: [],
    groups: [],
    orgs: [],
  });

  return (
    <>
      <div className="hero min-h-[50%] bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mt-10">Cari Datasets!</h1>
            <p className="py-6">
              Temukan data-data Pemerintahan Kabupaten Deli Serdang dengan
              mudah!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div className="card w-full justify-center items-center shadow-2xl bg-base-100">
            <div className="card-body flex lg:flex-row md:flex-col sm:flex-col">
              <DatasetSearchForm
                options={options}
                setOptions={setOptions}
                groups={groups}
                orgs={orgs}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:flex-row py-12">
            <div className="flex h-auto flex-grow card bg-base-300 rounded-box place-items-start w-1/4">
              <div className="judul-item flex flex-col text-start p-5">
                <p className="text-md font-bold p-2">
                  Cari Berdasarkan Organisasi
                </p>
                {organisasi && organisasi.length > 0 ? (
                  <div className="w-60">
                    {organisasi.map((data, k) => (
                      <div
                        key={k}
                        className="grid gap-2 grid-cols-1 form-control"
                      >
                        <label className="label cursor-pointer">
                          <span className="label-text text-left mr-2">
                            {data.title}
                            {/* <span className="badge badge-lg badge-primary text-sm">
                              {data.package_count}
                            </span> */}
                          </span>

                          <input type="checkbox" className="checkbox" />
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Data Organisasi Tidak Ada</p>
                )}
              </div>
              <div className="judul-item flex flex-col text-start p-5">
                <p className="text-md font-bold p-2">Cari Berdasarkan Grup</p>
                {grup && grup.length > 0 ? (
                  <div className="w-60">
                    {grup.map((datagrup, k) => (
                      <div key={k} className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text truncate truncate-words">
                            {datagrup.title}
                          </span>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Data Grup Tidak Ada</p>
                )}
              </div>
              <div className="judul-item flex flex-col text-start pl-5">
                <p className="text-md font-bold p-2">Kata Kunci</p>
              </div>

              {tags && tags.length > 0 ? (
                <div className="judul-item flex flex-row flex-wrap text-center p-3">
                  {tags.map((dataTags, k) => (
                    <div
                      key={k}
                      className="text-xs badge badge-primary m-1 p-1 cursor-pointer"
                    >
                      {dataTags.name}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Data Tags Tidak Ada</p>
              )}
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-auto  card bg-base-300 rounded-box place-items-start w-10/12">
              <div className="mx-10 my-5">
                <ListOfDatasets
                  options={options}
                  setOptions={setOptions}
                  ckan={ckan}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
