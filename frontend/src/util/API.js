import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

instance.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"
instance.defaults.headers.common['X-CSRF-TOKEN'] = window.csrf_token
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers.common['Access-Control-Allow-Methods'] = "GET,PUT,POST,DELETE,PATCH,OPTIONS"
instance.defaults.withCredentials = true;
//instance.defaults.headers.common['Authorization'] = `Bearer ${''}`

export default instance
