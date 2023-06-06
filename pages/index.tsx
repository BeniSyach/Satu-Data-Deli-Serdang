export function Index() {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus facilis eius ratione cumque aliquid perspiciatis a
                facere quo optio assumenda.
              </p>
              <p className="mb-4  md:text-base sm:text-sm text-xs animate__animated animate__fadeInUp animate__delay-1s">
                <input
                  type="text"
                  placeholder="Cari Data Anda"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </p>
              <button className="bg-slate-900 hover:bg-slate-950 text-slate-500 w-48 h-12 rounded-lg font-bold  animate__animated animate__fadeInUp animate__delay-1s">
                Cari <i className="fa-solid fa-question ml-1"></i>
              </button>
              {/* Stats */}
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
                  <div className="stat-value">31K</div>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
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
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
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
                  <div className="stat-title">Pengguna</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam eos maxime quibusdam saepe nobis. Provident, alias
                commodi? Saepe cum eaque fugiat ducimus repellendus illo error
                dignissimos. Nemo voluptate, modi obcaecati doloremque, corporis
                provident quos officiis quasi ea quas, libero sint.
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
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="flex items-center gap-4 text-xl font-bold mb-6">
                  <i className="fa-solid fa-circle-check text-4xl text-teal-600"></i>
                  Lorem ipsum dolor sit amet consectetur.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, laboriosam?
              </p>
            </div>
            <div className="box flex justify-center items-center flex-wrap gap-4 pt-16">
              <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                <img
                  src="/assets/image/deliserdang.svg"
                  alt="services1"
                  className="w-[150px] h-[100px] p-4"
                />
                <h5 className="font-bold items-center justify-center text-center mb-2">
                  Ekonomi
                </h5>
              </div>
              <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                <img
                  src="/assets/image/deliserdang.svg"
                  alt="services1"
                  className="w-[150px] h-[100px] p-4"
                />
                <h5 className="font-bold items-center justify-center text-center mb-2">
                  Pendidikan
                </h5>
              </div>
              <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                <img
                  src="/assets/image/deliserdang.svg"
                  alt="services1"
                  className="w-[150px] h-[100px] p-4"
                />
                <h5 className="font-bold items-center justify-center text-center mb-2">
                  Sosial
                </h5>
              </div>
              <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                <img
                  src="/assets/image/deliserdang.svg"
                  alt="services1"
                  className="w-[150px] h-[100px] p-4"
                />
                <h5 className="font-bold items-center justify-center text-center mb-2">
                  Pariwisata
                </h5>
              </div>
              <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                <img
                  src="/assets/image/deliserdang.svg"
                  alt="services1"
                  className="w-[150px] h-[100px] p-4"
                />
                <h5 className="font-bold items-center justify-center text-center mb-2">
                  Penduduk
                </h5>
              </div>
              <div className="card card-normal w-auto bg-base-100 shadow-xl mx-1 my-1 hover:bg-slate-700 cursor-pointer">
                <img
                  src="/assets/image/deliserdang.svg"
                  alt="services1"
                  className="w-[150px] h-[100px] p-4"
                />
                <h5 className="font-bold items-center justify-center text-center mb-2">
                  Pertanian
                </h5>
              </div>
            </div>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, modi.
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
