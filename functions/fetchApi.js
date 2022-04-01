import axios from "axios"

const baseAPIUrl = "http://animek.eu-4.evennode.com/"
const searchAnime = async (query) => {
  try {
    const request = await axios.get(`${baseAPIUrl}search/${query}`)
    const response = request.data

    return response
  } catch (error) {
    console.error(error)
  }
}
const searchGenre = async (query) => {
  try {
    const { data } = await axios.get(`${baseAPIUrl}genre/${query}`)
    return data
  } catch (e) {
    console.error(e)
  }
}
export { searchAnime, searchGenre, baseAPIUrl }
