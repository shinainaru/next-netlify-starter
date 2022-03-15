import Head from "next/head"
import { useRouter } from "next/router"
import Custom404 from "@pages/404"

function Search({ response }) {
  const router = useRouter()
  const genreList = ['anal', 'milf']
  const { genre } = router.query
  const found = genre.toLowerCase().includes(genreList) ? <h1> FOUND </h1> : <Custom404 />
  return (
    <>
      {found}
    </>
  )
}
