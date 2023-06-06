import getConfig from "next/config";
import Link from "next/link";

const dms = getConfig().publicRuntimeConfig.DMS;

export async function getServerSideProps() {
  const response = await fetch(
    `${dms}/api/3/action/organization_list?all_fields=true`
  );
  const organisasi = await response.json();
  const organisasiDetail = organisasi.result;

  const defaultValues = {
    name: "URL Organisasi",
    image_url: "/assets/image/deliserdang.svg",
    title: "Nama Organisasi",
    package_count: "0",
  };

  const tampilOrganisasi = organisasiDetail.map((organisasiValue) => ({
    name: organisasiValue.name || defaultValues.name,
    image_url: organisasiValue.image_url || defaultValues.image_url,
    title: organisasiValue.title || defaultValues.title,
    package_count: organisasiValue.package_count || defaultValues.package_count,
  }));

  return {
    props: {
      organisasi: tampilOrganisasi,
    },
  };
}

export function Organisasi({ organisasi }) {
  return (
    <>
      <div className="hero min-h-[50%] bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mt-10">Organisasi</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="card-body flex justify-center items-center lg:flex-row md:flex-col sm:flex-col">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cari Organisasi</span>
          </label>
          <input
            type="text"
            placeholder="Cari Organisasi Anda"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-9">
          <button className="btn btn-primary">Cari</button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {organisasi && organisasi.length > 0 ? (
          <div>
            {organisasi.map((organisasi, k) => (
              <Link key={k} href={`/organisasi/${organisasi.name}`}>
                <div className="card w-60 bg-base-100 shadow-xl m-2 cursor-pointer hover:bg-base-300">
                  <figure className="px-10 pt-10">
                    <img
                      src={organisasi.image_url}
                      alt="Logo OPD"
                      className="rounded-md w-[100px]"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-sm">{organisasi.title}</h2>
                    <div className="card-actions">
                      <div className="badge badge-primary">
                        {organisasi.package_count} Datasets
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="bg-base-300 m-5 p-5 text-4xl font-bold ">
            Tidak Ada Organisasi
          </p>
        )}
      </div>
      <div></div>
    </>
  );
}

export default Organisasi;
