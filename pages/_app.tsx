import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles.css";
import { useRouter } from "next/router";
import LayoutLogin from "../components/login/LayoutLogin";
import React from "react";
import LayoutDashboard from "../components/backend/LayoutDashboard";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  // useEffect(() => {
  //   const htmlElement = document.documentElement;
  //   const currentTheme = htmlElement.getAttribute("data-theme");
  //   if (currentTheme == "" || currentTheme == "dark") {
  //     htmlElement.setAttribute("data-theme", "dark");
  //   } else {
  //     htmlElement.setAttribute("data-theme", "cupcake");
  //   }
  // }, []);

  // Tentukan Layout berdasarkan rute yang aktif
  const getLayout = () => {
    if (pathname === "/auth/login" || pathname === "/auth/register") {
      return (
        <LayoutLogin>
          {" "}
          <Component {...pageProps} />
        </LayoutLogin>
      );
    }

    if (pathname === "/backend/dashboard") {
      return (
        <LayoutDashboard>
          {" "}
          <Component {...pageProps} />
        </LayoutDashboard>
      );
    }

    return (
      <>
        <Head>
          <title>Satu Data Kabupaten Deli Serdang</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="Satu Data Deli Serdang,Satu-Data-Deli-Serdang"
          />
          <meta
            name="keyword"
            content="Satu Data Deli Serdang, Satu Data, Portal Satu Data Deli Serdang, Web Satu Data Deli Serdang"
          />
          <meta
            name="description"
            content="Portal Resmi Satu Data Deli Serdang"
          />
          <link
            rel="icon"
            href="https://deliserdangkab.go.id/logonya.png"
            sizes="any"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
          {/* Font Google */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          {/* Animasi */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />

          {/* <!-- AOS --> */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
        </Head>
        <Navbar />

        <main className="app">
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    );
  };
  return getLayout();
};

export default CustomApp;
