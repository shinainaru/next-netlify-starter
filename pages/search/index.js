import { useRouter } from 'next/router'
import {useState} from "react";

function IndexSearch() {
  const [query, setQuery] = useState(null)
  const router = useRouter()
  return (
    <>
      <div class="flex border-grey-light border">
	<input onKeyDown={() => router.push('/search/' + query)} onChange={(e) => setQuery(e.target.value)} class="w-full rounded ml-1" type="text" placeholder="Search...">
	<button onClick={() => router.push('/search/' + query)} class="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
	  <span class="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
            <i class="material-icons text-xl">search</i>
	  </span>
	</button>
      </div>
    </>
  )
}

export default IndexSearch
