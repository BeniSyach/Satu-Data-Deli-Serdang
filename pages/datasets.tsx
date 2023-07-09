import getConfig from "next/config";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Title from "../components/Typography/Title";

const dms = getConfig().publicRuntimeConfig.DMS;

const formatter = new Intl.DateTimeFormat(["ban", "id"], {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export async function getServerSideProps() {
  const response = await fetch(`${dms}/api/3/action/package_search`);
  const datasets = await response.json();
  const datasetsWithDetails = await Promise.all(
    datasets.result.results.map(async (dataset) => {
      const response = await fetch(
        `${dms}/api/3/action/package_show?id=` + dataset.name
      );
      const json = await response.json();
      return json.result;
    })
  );

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

  return {
    props: {
      datasets: datasetsWithDetails,
      organisasi: Organisasi,
      grup: Grup,
      tags: Tags,
    },
  };
}

export default function datasetsPage({ datasets, organisasi, grup, tags }) {
  const [selectedGrup, setSelectedGrup] = useState("");
  const [selectedOrganisasi, setSelectedOrganisasi] = useState("");

  const handleSetSelectedGrup = (event) => {
    setSelectedGrup(event.target.value);
  };

  const handleSetSelectedOrganisasi = (event) => {
    setSelectedOrganisasi(event.target.value);
  };

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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cari Datasets</span>
                </label>
                <input
                  type="text"
                  placeholder="Cari Datasets Anda"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={selectedGrup}
                  onChange={handleSetSelectedGrup}
                >
                  {grup && grup.length > 0 ? (
                    <>
                      <option>Pilih Grup</option>
                      {grup.map((datagrup, k) => (
                        <option key={k} value={datagrup.name}>
                          {datagrup.title}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option disabled value="0">
                      Data Tidak Ada
                    </option>
                  )}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Organisasi</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={selectedOrganisasi}
                  onChange={handleSetSelectedOrganisasi}
                >
                  <option selected>Pilih Organisasi</option>
                  {organisasi && organisasi.length > 0 ? (
                    <>
                      {organisasi.map((dataOrganisasi, k) => (
                        <option key={k} value={dataOrganisasi.name}>
                          {dataOrganisasi.title}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="0">Data Tidak Ada</option>
                  )}
                </select>
              </div>
              <div className="form-control mt-9">
                <button className="btn btn-primary">Cari</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:flex-row py-12">
            <div className="flex h-auto flex-grow card bg-base-300 rounded-box place-items-start">
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
            <div className="grid h-auto flex-grow card bg-base-300 rounded-box place-items-start">
              <div className="judul-item">
                <p className="flex text-4xl font-bold text-md p-5">
                  {datasets.length} Datasets
                </p>
                <div className="judul-item flex flex-col text-center p-4 ">
                  {datasets && datasets.length > 0 ? (
                    <div>
                      {datasets.map((dataset, k) => (
                        <Link
                          key={k}
                          href={`/@${dataset.organization.name}/${dataset.name}`}
                        >
                          <div className="card card-side bg-base-100 shadow-xl w-full mb-5 cursor-pointer hover:bg-base-200">
                            <figure>
                              <img
                                src="https://deliserdangkab.go.id/files/website_resmi.png"
                                alt="logo Datasets"
                                // className="lg:w-[200px] sm:w-[100px] p-5"
                                className="w-full"
                              />
                            </figure>
                            <div className="card-body">
                              <h5 className="card-title text-start">
                                {dataset.title}
                              </h5>
                              <p className="text-start text-sm">
                                {dataset.notes}
                              </p>
                              <div className="card-actions justify-start">
                                <span className="badge badge-lg badge-primary text-sm">
                                  {dataset.organization.title}
                                </span>
                                <span className="badge badge-lg badge-primary text-sm">
                                  {formatter.format(
                                    new Date(dataset.metadata_modified)
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="bg-base-300 m-5 p-5 text-4xl font-bold ">
                      Tidak Ada Datasets
                    </p>
                  )}
                </div>
              </div>
              <div className="btn-group flex p-5">
                <button className="btn">«</button>
                <button className="btn">Halaman 1</button>
                <button className="btn">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
