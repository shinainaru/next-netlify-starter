import { useRouter } from "next/router"

function IndexSearch() {
  const { asPath, query, push } = useRouter()
  if (asPath.match("/search") && query && query.q) {
    push('/search/' + query.q)
  }
  
  return (
    <>
      <h3>Error 403</h3>
      <p>Kamu akan di alihkan ke halaman /search/QUERY </p>
    </>
  )
}

export default IndexSearch
