import axios from "axios"
import Head from "next/head"
import Header from '@components/Header'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

function IndexSearch({ response }) {
  const router = useRouter()
  const { q } = router.query

  return (
    <>
      <Head>
        <title>{q} · Mr.Cyser#R00t</title>
      </Head>
      <div className="max-w-full">
        <div className="mt-2 grid w-full grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3 lg:grid-cols-7">
          {response.data.map((res) => (
            <div
              key={res.mal_id}
              className="group cursor-pointer overflow-hidden rounded-xl border-b-2 border-b-transparent bg-slate-800 hover:border-b-rose-700"
            >
              <Link href={`${res.url}`} passHref>
                <a>
                  <Image
                    src={res.images.jpg.image_url}
                    alt={res.title}
                    width={225}
                    height={320}
                    layout="responsive"
                    objectFit="cover"
                    className="transition duration-300 ease-in-out group-hover:scale-110"
                    priority={true}
                  />
                </a>
              </Link>
              <Link href={`${res.url}`}>
                <h2 className="truncate p-2 break-all">{res.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  const query = context.params.q
  const request = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
  const response = request.data
  return {
    props: {
      response
    }
  }
}


export default IndexSearch
