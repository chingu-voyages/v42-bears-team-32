import axios from 'axios'
let API
API = axios.create({ baseURL: `${process.env.REACT_APP_API}` })

// Getting the data that is persisted by redux-persist
const user = JSON.parse(localStorage.getItem('user'))
const TOKEN = user?.token


// Intercepting Request
API.interceptors.request.use(req => {
    if (TOKEN) {
      req.headers.Authorization = `Bearer ${TOKEN}`
    }
    return req
})


export const getAllFoods = () => API.get('/foods')
export const getSingleFood = (id) => API.get(`/foods/${id}`)

// API Auth Endpoints
export const loginUser = (creds) => API.post('/auth/login', creds)
export const registerUser = (creds) => API.post('/auth', creds)
export const getProfile = () => API.get('/profile')


// const user = JSON.parse(localStorage.getItem('user'))
// const TOKEN = user?.token
// console.log(TOKEN)
// API.interceptors.request.use(req => {
//   if (TOKEN) {
    //     req.headers.Authorization = `Bearer ${TOKEN}`
    //   }
    //   return req
// })
// if(process.env.REACT_APP_LOCAL){
//    API = axios.create({ baseURL: `${process.env.REACT_APP_LOCAL}` })
// }else{
    //    API = axios.create({ baseURL: '/api' })
    // }