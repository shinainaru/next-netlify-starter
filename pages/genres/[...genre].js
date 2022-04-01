import Head from "next/head"
import { useRouter } from "next/router"
import NotFound from "@components/NotFound"
import { searchGenre } from "../functions/fetchApi"

function GetGenre({ respon }) {
  return (
    <>
      <h1>KONTOL SERVER</h1>
    </>
  )
}
export default GetGenre

export const getServerSideProps = async (context) => {
  const { genre } = context.query;
  const respon = await searchGenre(genre)
  if (!genre || respon.data.length < 1)) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      }
    }
  }

  return {
    props: {
      respon
    }
  }
}
