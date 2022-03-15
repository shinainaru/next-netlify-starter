import Head from "next/head"
import Link from "next/link"

export default function Genres() {
  const genre = [
    { link: '/genres/milf', text: 'Milf'},
    { link: '/genres/anal', text: 'Anal' },
  ].sort(function(a, b){
    var nameA = a.text.toLowerCase(), nameB = b.text.toLowerCase();
    if (nameA < nameB)
      return -1;
    if (nameA > nameB)
      return 1;
    return 0;
  });

  return (
    <>
      <Head>
        <title>genre - Mr.Cyser#R00t</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-full">
        <div className="mt-2 grid w-full grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3 lg:grid-cols-7">
        {genre.map((res) => (
            <div
              key={res.text}
              className="group cursor-pointer overflow-hidden rounded-xl border-b-2 border-b-transparent bg-slate-800 hover:border-b-rose-700"
            >
              <Link href={`${res.link}`} passHref>
                <h2 className="truncate p-2 break-all">{res.text}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
