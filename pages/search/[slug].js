import { useRouter } from 'next/router';
import Head from 'next/head'

export default function Search() {
  const { asPath } = useRouter();
  return (
    <div className="container">
      <Head>
        <title> Hasil Pencarian {asPath} - angga-buat-web.netlify.app </title>
      <Head />
    </div>
  )
}
