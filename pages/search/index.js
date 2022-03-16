import { useRouter } from "next/router"

function IndexSearch() {
  const { asPath, query } = useRouter()
  setTimeout(() => {
    console.log(query)
    console.log(asPath)
  }, 1000 * 60 * 1.3)
  
  return (
    <>
      <h1>You get RickRolled</h1>
    </>
  )
}

export default IndexSearch
