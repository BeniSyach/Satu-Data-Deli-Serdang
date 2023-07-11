import { GetServerSideProps } from "next";
import getConfig from "next/config";
import Link from "next/link";

const dms = getConfig().publicRuntimeConfig.DMS;

const formatter = new Intl.DateTimeFormat(["ban", "id"], {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { grup } = context.query;
  const response = await fetch(
    `${dms}/api/3/action/group_show?id=${grup}&include_datasets=true`
  );
  const _group = await response.json();
  return {
    props: {
      group: _group.result,
    },
  };
};

export default function GroupPage({ group }) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  return (
    <div>
      <div className="bg-base-200">
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:flex-row py-12">
            <div className="flex h-auto flex-grow card bg-base-300 rounded-box place-items-start w-1/4">
              <div className="judul-item flex flex-col items-center pl-5">
                <img
                  src={group.image_display_url}
                  alt=""
                  className="w-1/2 items-center mt-5"
                />
                <p className="text-xl text-center font-bold mb-10">
                  {group.display_name}
                </p>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-auto  card bg-base-300 rounded-box place-items-start w-10/12">
              <div className="mx-10 my-5">
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <a href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          ></path>
                        </svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/grup">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          ></path>
                        </svg>
                        Group
                      </a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-2 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                      {group.display_name}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row">
                  <div className="form-control w-full max-w-xs mt-5">
                    <input
                      type="text"
                      placeholder="Cari Dataset"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <button className="mt-5 ml-5 btn btn-active btn-neutral">
                    Cari
                  </button>
                </div>

                <div className="judul-item">
                  <p className="flex text-4xl font-bold text-md p-5">
                    {group.package_count} Datasets Ditemukan
                  </p>
                  <div className="judul-item flex flex-col text-center p-4 ">
                    {group && group.packages.length > 0 ? (
                      <div>
                        {group.packages.map((dataset, k) => (
                          <Link
                            key={k}
                            href={`/@${dataset.organization.name}/${dataset.name}`}
                          >
                            <div className="card card-side bg-base-100 shadow-xl w-full mb-5 cursor-pointer hover:bg-base-200">
                              {/* <figure>
                                <img
                                  src="https://deliserdangkab.go.id/files/website_resmi.png"
                                  alt="logo Datasets"
                                  className="lg:w-[100px] sm:w-[50px] p-5"
                                />
                              </figure> */}
                              <div className="card-body">
                                <h5 className="card-title text-start">
                                  {truncateText(dataset.title, 100)}
                                </h5>
                                <p className="text-start text-sm">
                                  {truncateText(dataset.notes, 100)}
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
      </div>
    </div>
  );
}
