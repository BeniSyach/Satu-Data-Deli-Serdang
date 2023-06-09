import { GetServerSideProps } from "next";
import getConfig from "next/config";
import React from "react";
import Organisasi from "../../organisasi";

const dms = getConfig().publicRuntimeConfig.DMS;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { organisasi } = context.query;
  const response = await fetch(
    `${dms}/api/3/action/organization_show?id=${organisasi}&include_datasets=true`
  );
  const _organisasi = await response.json();
  return {
    props: {
      organisasi: _organisasi.result,
    },
  };
};

export default function OrganisasiPage({ organisasi }) {
  console.log(organisasi);
  return (
    <div>
      <h1>Ini Halaman Detail Page</h1>
    </div>
  );
}
