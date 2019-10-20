import axios, { AxiosPromise } from 'axios'

let baseURL = process.env.REACT_APP_API_URL!

let api = axios.create({
    baseURL
})

export const getMostAccessedProducts: () => AxiosPromise<any> = () => api.get('/product/most_access')