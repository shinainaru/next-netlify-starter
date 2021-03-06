import { useRouter } from 'next/router'
import {useState} from "react";

function IndexSearch() {
  const [query, setQuery] = useState(null)
  const router = useRouter()
  return (
    <>
      <div class="container flex flex-wrap justify-center items-center mx-auto">
        <div class="flex border-b rounded">
          <input onKeyDown={(ev) => {if (ev.key === "Enter") {ev.preventDefault();router.push('/search/' + query)}}} onChange={(e) => setQuery(e.target.value)} type="text" class="px-4 py-2 w-full text-gray-800" placeholder="Search..." />
          <button onClick={() => router.push('/search/' + query)}  class="flex items-center justify-center px-4 border-l">
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24">
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default IndexSearch
