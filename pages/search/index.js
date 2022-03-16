import { useRouter } from "next/router"

function IndexSearch() {
  const { asPath, query } = useRouter()
  console.log(query)
  console.log(asPath)
  return (
    <>
      <h1>Path: {asPath} Query: {query}</h1>
    </>
  )
}

export default IndexSearch
