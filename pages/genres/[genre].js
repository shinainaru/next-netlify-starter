import Head from "next/head"
import { useRouter } from "next/router"

function Search({ response }) {
  const router = useRouter()
  const genreList = ['anal', 'milf']
  const { genre } = router.query
  const found = genre.toLowerCase().includes(genreList) ? <h1> FOUND </h1> : router.push('/404')
  return (
    <>
      {found}
    </>
  )
}
