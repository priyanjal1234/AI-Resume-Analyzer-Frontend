import axios from 'axios'

const api = axios.create({
    baseURL: "https://ai-resume-analyser-backend.onrender.com"
})

export default api
