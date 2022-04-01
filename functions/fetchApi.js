import axios from "axios"

const baseAPIUrl = () => {
  return "http://animek.eu-4.evennode.com/"
}

const searchAnime = async (query) => {
  try {
    const request = await axios.get(`${baseAPIUrl}search/${query}`)
    const response = request.data

    return response
  } catch (error) {
    console.error(error)
  }
}

export { baseAPIUrl, searchAnime }
