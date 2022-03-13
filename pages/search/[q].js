import Head from "next/head"
import Header from '@components/Header'
import { useRouter } from "next/router"

function Search() {
  const router = useRouter()
  const { q } = router.query
  return (
    <>
      <Head>
        <title>{q} · Mr.Cyser#R00t</title>
      </Head>
      <Header title="tch" />
    </>
  )
}

export default Search
