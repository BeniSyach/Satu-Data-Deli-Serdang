import { GetServerSideProps } from "next";
import getConfig from "next/config";

const dms = getConfig().publicRuntimeConfig.DMS;

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
  console.log(group);
  return (
    <div>
      <h1>Ini Halaman Grup Detail</h1>
    </div>
  );
}
