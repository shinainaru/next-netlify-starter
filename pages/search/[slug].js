import Head from "next/head"
import Header from '@components/Header'
import { useRouter } from "next/router"

function Search() {
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <title>{asPath} · Mr.Cyser#R00t</title>
      </Head>
      <Header title="tch" />
    </>
  )
}

export default Search
