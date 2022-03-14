import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Why? I'am just hentai-man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Yo! You get anime hentai" />
        Setiap hari kerjaannya hanya coli. Sampe kontolnya sakit
      </main>
    </div>
  )
}
