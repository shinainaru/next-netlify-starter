import Head from "next/head"
import { useRouter } from "next/router"
import NotFound from "@components/NotFound"

function GetGenre({ genre }) {
  return (
    <>
      <h1>Hi {genre} </h1>
    </>
  )
}
export default GetGenre

export const getServerSideProps = async (context) => {
  const { genre } = context.query;
  const genreList = ['anal', 'milf']
  if (!genre || !genreList.includes(genre.toLowerCase())) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      }
    }
  }

  return {
    props: {
      genre
    }
  }
}
