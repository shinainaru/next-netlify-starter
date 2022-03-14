import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mr.Cyser#R00t</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mr.Cyser#R00t" />
        <p className="description">
          I'am hate you If you guy.
        </p>
      </main>
    </div>
  )
}
