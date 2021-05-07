import axios from "axios"

const endPoint = 'https://fakestoreapi.com/carts?limit=5'

//I tried to use .env file for the endpoint and api key, but i couldnt get it to work.

axios.interceptors.request.use(

  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url

    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod`)
  },
}