import { useRouter } from 'next/router';
import Head from 'next/head'

const search = () => {
  const { asPath, pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Hasil Pencarian {asPath} </title>
      <Head />
    </>
  );
}

export default search;
