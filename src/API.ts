import axios, { AxiosPromise } from 'axios'

let baseURL = process.env.REACT_APP_API_URL!

let headers = {
    'Account-Id': "7b10ebaf-fecd-4d5b-80f5-a7121f7e4463"
}

let api = axios.create({
    baseURL,
    headers
})

export const getMostSaledProducts: () => AxiosPromise<Response<Product>> = () => api.get('/product/most_sales')

export const getMostAccessedProducts: () => AxiosPromise<Response<Product>> = () => api.get('/product/most_access')

export const getMostAccessedCategory: () => AxiosPromise<CategoryResponse[]> = () => api.get('/category/most_access?size=1')

export const getLessAccessedCategory: () => AxiosPromise<CategoryResponse[]> = () => api.get('/category/least_access?size=1')

export const getManager: () => AxiosPromise<Response<Product>> = () => api.get('/manager')

export interface CategoryResponse {
    category: string
    variation: Variation
}

export interface Response<T> {
    items: T[]
    total: number
}

export interface Product {
    id: string
    category: string
    collatorCode: string
    title: string
    variations: Variation[]
}

export interface Variation {
    accessCount: string
    color: string
    currentPrice: string
    grid: string
    gridType: string
    id: string
    images: string[]
    previousPrice: string
    productId: Product['id']
    sku: string
    stockQuantitiy: number
    uri: string
}