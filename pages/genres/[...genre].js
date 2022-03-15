import Head from "next/head"
import { useRouter } from "next/router"
import NotFound from "@components/NotFound"

function GetGenre() {
  const router = useRouter()
  const genreList = ['anal', 'milf']
  const { genre } = router.query
  
  return (
    <>
      {genre}
    </>
  )
}
export default GetGenre
