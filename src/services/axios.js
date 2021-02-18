import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      global.localStorage &&
      global.localStorage.token &&
      `Bearer ${localStorage.token}`
  }
})
export default api
