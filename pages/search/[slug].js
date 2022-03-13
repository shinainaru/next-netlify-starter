import { useRouter } from 'next/router';
import Head from 'next/head'
import Header from '@components/Header'

const search = () => {
  const { asPath, pathname } = useRouter()
  return (
  <div className="container>
      <Head>
        <title>Hasil Pencarian {asPath} </title>
      <Head />

      <main>
        <Header title="Hasil Pencarian {asPath}" />
        <p className="description">
          GOOD<code>pages/search/index.js</code>
        </p>
      </main>
    </div>
  )
}

export default search
