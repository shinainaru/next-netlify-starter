import Head from "next/head"
import { useRouter } from "next/router"
import NotFound from "@components/NotFound"

function GetGenre() {
  const router = useRouter()
  const genreList = ['anal', 'milf']
  const { genre } = router.query
  const AllowGenre = ({ value }) => {
    genre.includes(genreList) ? {value} : <NotFound />
  }
  return (
    <>
      <AllowGenre value={(
        <h1>WORK BRO THANKS </h1>
      )} />
    </>
  )
}
export default GetGenre
