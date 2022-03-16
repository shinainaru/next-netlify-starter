import { useRouter } from "next/router"

function IndexSearch({ query }) {
  return (
    <>
      {query && (
      <div class="flex items-center justify-center">
        <div class="flex border-2 rounded">
          <form>
            <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
            <button class="flex items-center justify-center px-4 border-l" type="submit">
              <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      )}
    </>
  )
}

export default IndexSearch

export async function getServerSideProps(context) {

  const req = context.req
  const res = context.res
  const { q } = context.params
  console.log(req.url, q)
  const arah = req.url && req.url.match("/search") && context.params && q
  if (arah) {
    res.redirect('/search/' + q)
  } else {
    console.log(arah)
  }

  return {
    props: {
      query: arah
    }
  }
}
