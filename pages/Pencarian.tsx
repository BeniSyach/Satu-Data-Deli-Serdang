import { GetServerSideProps, NextPage } from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";

const dms = getConfig().publicRuntimeConfig.DMS;

interface list {}

interface DataProps {
  dataCari: list[];
}

const Pencarian: NextPage<DataProps> = ({ dataCari }) => {
  const router = useRouter();
  const { query } = router;

  const cari = query.query;

  console.log(cari);

  console.log(dataCari);

  return (
    <div>
      <h1>Hasil Pencarian</h1>
      <p>Anda Mencari : </p>
    </div>
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
