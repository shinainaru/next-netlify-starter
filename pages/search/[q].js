import axios from "axios"
import Head from "next/head"
import Header from '@components/Header'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Search() {
  const router = useRouter()
  const { q } = router.query
  const [anime, setAnime] = useState([])
  useEffect(() => {
    const fetchAnime = async (mal_id) => {
      const response = await searchAnime(mal_id)
      setAnime(response)
    }

    fetchAnime(router.query.q)
  }, [router.query.q])

  return (
    <>
      <Head>
        <title>{q} · Mr.Cyser#R00t</title>
      </Head>
      <div className="max-w-full">
        <h1>{anime}</h1>
      </div>
    </>
  )
}

const searchAnime = async (query) => {
  try {
    const request = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
    const response = request.data

    return response
  } catch (error) {
    console.error(error)
  }
}

export default Search
