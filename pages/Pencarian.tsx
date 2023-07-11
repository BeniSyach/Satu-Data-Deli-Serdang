import { GetServerSideProps, NextPage } from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import Link from "next/link";

const dms = getConfig().publicRuntimeConfig.DMS;

const formatter = new Intl.DateTimeFormat(["ban", "id"], {
  year: "numeric",
  month: "long",
  day: "numeric",
});

interface list {
  organization: {
    name: string;
    title: string;
  };
  name: string;
  title: string;
  notes: string;
  author: string;
  metadata_modified: string;
}

interface DataProps {
  dataCari: list[];
}

const Pencarian: NextPage<DataProps> = ({ dataCari }) => {
  const router = useRouter();
  const { query } = router;

  const cari = query.query;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <>
      <div className="hero min-h-[50%] bg-base-200">
        <div className="hero-content flex-col lg:flex-col items-start">
          <div className="text-left lg:text-left">
            <h1 className="text-5xl font-bold mt-10">Cari Datasets!</h1>
            <p className="py-6">
              <h1 className="text-2xl font-bold">Hasil Pencarian</h1>
              <h1 className="text-2xl font-bold">
                Anda Mencari : "{cari}"
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h1>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:flex-row py-12">
            <div className="grid h-auto flex-grow card bg-base-300 rounded-box place-items-start">
              <div className="judul-item">
                <p className="flex text-4xl font-bold text-md p-5">
                  {dataCari.length} Datasets Ditemukan
                </p>
                <div className="judul-item flex flex-col text-center p-4 ">
                  {dataCari && dataCari.length > 0 ? (
                    <div>
                      {dataCari.map((dataset, k) => (
                        <Link
                          key={k}
                          href={`/@${dataset.organization.name}/${dataset.name}`}
                        >
                          <div className="card card-side bg-base-100 shadow-xl w-full mb-5 cursor-pointer hover:bg-base-200">
                            <figure>
                              <img
                                src="https://deliserdangkab.go.id/files/website_resmi.png"
                                alt="logo Datasets"
                                className="lg:w-[100px] sm:w-[50px] p-5"
                              />
                            </figure>
                            <div className="card-body">
                              <h5 className="card-title text-start">
                                {dataset.title}
                              </h5>
                              <p className="text-start text-sm">
                                {truncateText(dataset.notes, 160)}
                              </p>
                              <div className="card-actions justify-start">
                                <span className="badge badge-lg badge-primary text-sm">
                                  {dataset.author}
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
                      "Datasets Tidak Ditemukan"
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<DataProps> = async ({
  query,
}) => {
  const cari = query.query;
  const response = await fetch(`${dms}/api/3/action/package_search?q=${cari}`);
  const data = await response.json();
  const datacari: list[] = data.result.results;
  return {
    props: {
      dataCari: datacari,
    },
  };
};

export default Pencarian;
