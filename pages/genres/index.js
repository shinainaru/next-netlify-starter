import Head from "next/head"
import Link from "next/link"

export default function Genres() {
  const genre = [
    { link: '/genres/milf', text: 'Milf'},
    { link: '/genres/anal', text: 'Anal' },
  ];
  return (
    <>
      <Head>
        <title>genre - Mr.Cyser#R00t</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-full">
        {genre.map(gen => (
          <div className="mt-2 grid w-1/2 grid-cols-2 gap-5 sm:grid-cols-7 md:grid-cols-15 md:gap-3 lg:grid-cols-7">
            <div className="group cursor-pointer overflow-hidden rounded-lg border-b-2 border-b-transparent bg-slate-800 hover:border-b-rose-700">
              <Link href={gen.link}>
                <a className="truncate p-2 break-all">{gen.text}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
