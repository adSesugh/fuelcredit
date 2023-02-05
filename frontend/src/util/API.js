import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

instance.defaults.headers.common['Accept'] = 'application/x-www-form-urlencoded'
instance.defaults.headers.common['Authorization'] = `Bearer ${''}`

export default instance
