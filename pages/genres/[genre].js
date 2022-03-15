import Head from "next/head"
import { useRouter } from "next/router"
import NotFound from "@components/NotFound"

function GetGenre() {
  const router = useRouter()
  const genreList = ['anal', 'milf']
  const { genre } = router.query
  const found = genre && genre.toLowerCase().includes(genreList) ? <h1> FOUND </h1> : <NotFound /> : ''
  return (
    <>
      {found}
    </>
  )
}
export default GetGenre
