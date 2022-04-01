import axios from "axios"

const searchAnime = async (query) => {
  try {
    const request = await axios.get(`http://animek.eu-4.evennode.com/search/${query}`)
    const response = request.data

    return response
  } catch (error) {
    console.error(error)
  }
}

export { searchAnime }
