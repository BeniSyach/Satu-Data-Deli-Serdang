import getConfig from "next/config";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

const dms = getConfig().publicRuntimeConfig.DMS;

export async function getServerSideProps() {
  const response = await fetch(
    `${dms}/api/3/action/group_list?all_fields=true`
  );
  const grup = await response.json();
  const grupDetail = grup.result;

  const getDataOrganisasi = await fetch(
    `${dms}/api/3/action/organization_list?all_fields=true`
  );
  const DataOrganisasi = await getDataOrganisasi.json();
  const Organisasi = DataOrganisasi.result;

  const getDataSets = await fetch(`${dms}/api/3/action/package_list`);
  const dataDataSets = await getDataSets.json();
  const datasets = dataDataSets.result;

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
      organisasi: Organisasi,
      hitungData: datasets,
    },
  };
}

export function Index({ grup, organisasi, hitungData }) {
  const [CariDataSets, setCariDataSets] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCariDataSets(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (CariDataSets.trim() !== "") {
      router.push(`/Pencarian?query=${encodeURIComponent(CariDataSets)}`);
    } else {
      return setErrorMessage("pencarian Tidak Boleh Kosong");
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="header min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="header-box flex lg:flex-row flex-col items-center gap-10">
            <div className="box lg:w-1/2 lg:order-1 order-2 lg:text-left text-center">
              <h1 className="font-extrabold md:text-4xl sm:text-3xl text-2xl mb-4  animate__animated animate__fadeInUp animate__delay-1s">
                Satu Data Indonesia <br /> Kabupaten Deli Serdang
              </h1>
              <p className="mb-4  md:text-base sm:text-sm text-xs animate__animated animate__fadeInUp animate__delay-1s">
                Temukan data-data Pemerintah Kabupaten Deli Serdang dengan
                mudah!
              </p>
              <form onSubmit={handleSubmit}>
                <p className="mb-1  md:text-base sm:text-sm text-xs animate__animated animate__fadeInUp animate__delay-1s">
                  <input
                    type="text"
                    placeholder="Cari Data Anda"
                    className="input input-bordered input-accent w-full max-w-xs"
                    value={CariDataSets}
                    onChange={handleChange}
                  />
                </p>
                <p className="mb-4 text-error text-xs">{errorMessage}</p>
                <button className=" bg-slate-900 hover:bg-slate-950 text-slate-500 w-48 h-12 rounded-lg font-bold  animate__animated animate__fadeInUp animate__delay-1s">
                  Cari <i className="fa-solid fa-question ml-1"></i>
                </button>
              </form>
              {/* Stats */}
              <br />
              <div className="border stats sm:stats-horizontal stats-vertical shadow mt-10 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Datasets</div>
                  <div className="stat-value">{hitungData.length}</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Organisasi</div>
                  <div className="stat-value">{organisasi.length}</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Group</div>
                  <div className="stat-value">{grup.length}</div>
                </div>
              </div>
            </div>

            <div className="box lg:w-1/2 lg:order-2 order-1 lg:pt-0 pt-5">
              <img
                src="assets/image/deliserdang.svg"
                alt="ini gambar header"
                className="xl:w-[400px] lg:w-[300px] md:w-[200px] sm:w-[100px] w-[100px] block ml-auto animate__animated animate__fadeInUp animate__delay-1s"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Setelah Hero */}
      <div className="kartu-navigasi">
        <div className="container flex lg:flex-row flex-col items-center mx-auto p-4 justify-center">
          <Link href="/datasets">
            <div className="card card-normal w-auto bg-base-100 shadow-xl mx-5 my-5 hover:bg-base-300 cursor-pointer">
              <figure className="px-10 pt-10">
                <img
                  src="/assets/image/5613.jpg"
                  alt="Shoes"
                  className="rounded-xl w-[100px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h4 className="card-title font-extrabold">TEMUKAN DATA</h4>
                <p>Temukan kumpulan data dan dapatkan wawasan dari data.</p>
                <div className="card-actions"></div>
              </div>
            </div>
          </Link>
          <Link href="/organisasi">
            <div className="card card-normal w-auto bg-base-100 shadow-xl mx-5 my-5 hover:bg-base-300 cursor-pointer">
              <figure className="px-10 pt-10">
                <img
                  src="/assets/image/4760012.jpg"
                  alt="Shoes"
                  className="rounded-xl w-[100px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h4 className="card-title font-extrabold">ORGANISASI</h4>
                <p>Temukan Data Perangkat Daerah Di Portal</p>
                <div className="card-actions"></div>
              </div>
            </div>
          </Link>
          <Link href="/grup">
            <div className="card card-normal w-auto bg-base-100 shadow-xl mx-5 my-5 hover:bg-base-300 cursor-pointer">
              <figure className="px-10 pt-10">
                <img
                  src="/assets/image/Na_Dec_02.jpg"
                  alt="Shoes"
                  className="rounded-xl w-[100px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h4 className="card-title font-extrabold">GRUP</h4>
                <p>Telusuri kumpulan data berdasarkan kategori</p>
                <div className="card-actions"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <!-- Service Start --> */}
      <div className="services py-32" id="service">
        <div className="container mx-auto px-4">
          <div className="service-box">
            <div className="box text-center">
              <h1 className="font-extrabold text-4xl mb-6">
                Satu Data Deli Serdang
              </h1>
              <p className="md:w-3/4 w-full mx-auto md:text-base sm:text-sm text-xs">
                Satu Data Indonesia adalah kebijakan data pemerintah untuk
                menghasilkan tata Kelola data yang akurat, mutakhir, terpadu,
                dan dapat dipertanggungjawabkan, serta mudah diakses dan
                dibagipakaikan antar Instansi Pusat dan Daerah melalui pemenuhan
                Standar Data, Metadata, Interoperabilitas Data, dan menggunakan
                kode referensi dan data induk.
              </p>
            </div>
            <div className="box grid md:grid-cols-2 grid-cols-1 gap-16 pt-16 items-center">
              <img
                src="assets/image/6263.jpg"
                alt="service"
                className="w-[500px] md:justify-self-end justify-self-center"
              />
              <div className="deskripsi md:justify-self-start justify-self-center">
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  Prinsip Satu Data Indonesia adalah sebagai berikut:
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Standar Data
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Metadata
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Interoperabilitas Data
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Kode Referensi dan Data Induk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Grup Start --> */}
      <div className="projects py-12" id="projects">
        <div className="container mx-auto p-4">
          <div className="projects-box">
            <div className="box text-center">
              <h1 className="font-extrabold text-4xl mb-6">Grups</h1>
              <p>
                Grup digunakan untuk membuat dan mengelola koleksi set data. Ini
                bisa untuk membuat katalog kumpulan data
              </p>
            </div>

            {grup && grup.length > 0 ? (
              <div className="box flex justify-center items-center flex-wrap gap-4 pt-16">
                {grup.map((grup, k) => (
                  <Link key={k} href={`/grup/${grup.name}`}>
                    <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                      <figure className="px-10 pt-10">
                        <img
                          src={`https://data.deliserdangkab.go.id/uploads/group/${grup.image_url}`}
                          alt="services1"
                          className="rounded-md w-[100px]"
                        />
                      </figure>
                      <h5 className="font-bold items-center justify-center text-center mb-2">
                        {grup.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="bg-base-300 m-5 p-5 text-4xl font-bold ">
                Tidak Ada Grup
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Kontak */}
      {/* <!-- Kontak Start --> */}
      <div className="kontak py-12" id="kontak">
        <div className="container mx-auto px-4">
          <div className="kontak-box">
            <div className="box text-center">
              <h1 className="font-extrabold text-4xl mb-6">Kontak Kami</h1>
              <p>
                Jika anda memiliki pertanyaan seputar Satu Data Kabupaten Deli
                Serdang, silahkan menghubungi kami.
              </p>
            </div>
            <form
              action="https://formsubmit.co/benisyach32@gmail.com"
              method="POST"
              className="mt-10"
            >
              <table className="mx-auto lg:w-3/5 w-3/4">
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="Nama_lengkap"
                        placeholder="Nama Lengkap"
                        required
                        className="w-full h-12 rounded-md border p-3"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="Email"
                        placeholder="Email anda"
                        required
                        className="w-full h-12 rounded-md border p-3"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <textarea
                        name="Pesan"
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Pesan..."
                        required
                        className="w-full rounded-md border p-3"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        type="submit"
                        className="w-40 h-10 bg-teal-600 ml-auto block font-bold rounded hover:bg-teal-7000"
                      >
                        Kirim
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Kontak End --> */}
    </>
  );
}

export default Index;
