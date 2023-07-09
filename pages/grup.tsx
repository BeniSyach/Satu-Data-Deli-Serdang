import getConfig from "next/config";
import Link from "next/link";

const dms = getConfig().publicRuntimeConfig.DMS;

export async function getServerSideProps() {
  const response = await fetch(
    `${dms}/api/3/action/group_list?all_fields=true`
  );
  const grup = await response.json();
  const grupDetail = grup.result;

  const defaultValues = {
    name: "URL Grup",
    image_url: "/assets/image/deliserdang.svg",
    title: "Nama Grup",
    package_count: "0",
  };

  const tampilGrup = grupDetail.map((grupValue) => ({
    name: grupValue.name || defaultValues.name,
    image_url: grupValue.image_url || defaultValues.image_url,
    title: grupValue.title || defaultValues.title,
    package_count: grupValue.package_count || defaultValues.package_count,
  }));

  return {
    props: {
      grup: tampilGrup,
    },
  };
}

export function Grup({ grup }) {
  console.log(grup);
  return (
    <>
      <div className="hero min-h-[50%] bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mt-10">Grup</h1>
            <p className="py-6">
              Grup digunakan untuk membuat dan mengelola koleksi set data. Ini
              bisa untuk membuat katalog kumpulan data untuk proyek atau tim
              tertentu, atau pada tema tertentu, atau sebagai cara yang sangat
              sederhana untuk membantu orang menemukan dan menelusuri kumpulan
              data Anda yang diterbitkan.
            </p>
          </div>
        </div>
      </div>
      <div className="card-body flex justify-center items-center lg:flex-row md:flex-col sm:flex-col">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cari Grup</span>
          </label>
          <input
            type="text"
            placeholder="Cari Grup Anda"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-9">
          <button className="btn btn-primary">Cari</button>
        </div>
      </div>

      {grup && grup.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center items-center">
          {grup.map((grup, k) => (
            <Link key={k} href={`/grup/${grup.name}`}>
              <div className="card w-60 bg-base-100 shadow-xl m-2 cursor-pointer hover:bg-base-300">
                <figure className="px-10 pt-10">
                  <img
                    src={`https://data.deliserdangkab.go.id/uploads/group/${grup.image_url}`}
                    alt="Logo Grup"
                    className="rounded-md w-[100px]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-sm">{grup.title}</h2>
                  <div className="card-actions">
                    <div className="badge badge-primary">
                      {grup.package_count} datasets
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="bg-base-300 m-5 p-5 text-4xl font-bold ">
          Tidak Ada Grup
        </p>
      )}
    </>
  );
}

export default Grup;
