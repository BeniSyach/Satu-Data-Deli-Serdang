import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div className="flex flex-row">
          <img
            src="/assets/image/deliserdang.svg"
            alt="logo deli serdang"
            className="w-[50px]"
          />
          <img
            src="/assets/image/satudata.png"
            alt="logo Satu Data"
            className="w-[100px]"
          />
        </div>
        <p className="text-xl font-bold">
          Satu Data Indonesia
          <br />
          Kabupaten Deli Serdang
        </p>
      </div>
      <div>
        <span className="footer-title">Navigasi</span>
        <a className="link link-hover">Datasets</a>
        <a className="link link-hover">Profil Satu Data Deli Serdang</a>
        <a className="link link-hover">Organisasi</a>
        <a className="link link-hover">Kontak Kami</a>
      </div>
      <div>
        <span className="footer-title">Organisasi Perangkat Daerah</span>
        <a className="link link-hover">Diskominfostan Kabupaten Deli Serdang</a>
        <a className="link link-hover">BAPPEDA Kabupaten Deli Serdang</a>
        <a className="link link-hover">BAPPENAS</a>
        <a className="link link-hover"></a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
