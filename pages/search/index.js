import { useRouter } from "next/router"

function IndexSearch() {
  const { pathname, query } = useRouter()
  
  return (
    <>
      <h1>Path: {pathname} Query: {query}</h1>
    </>
  )
}

export default IndexSearch
