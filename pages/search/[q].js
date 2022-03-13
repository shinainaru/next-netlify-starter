import axios from "axios"
import Head from "next/head"
import Header from '@components/Header'
import { useRouter } from "next/router"

function Search({ response }) {
  const router = useRouter()
  const { q } = router.query

  return (
    <>
      <Head>
        <title>{q} · Mr.Cyser#R00t</title>
      </Head>
      <div className="max-w-full">
        <h1>{response}</h1>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps() {
  const request = await axios.get(`https://api.jikan.moe/v4/anime?q=${query.q}`)
  const response = request.data

  return {
    props: { response }
  }
}


export default Search
