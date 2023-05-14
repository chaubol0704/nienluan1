import axiosConfig from '../axiosConfig'
import axios from 'axios'


export const apiGetAll = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/all',
            // params: query
        })
        // console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
//  gọi all các món
export const apiGetAllOrder = (query) =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/allorder',
            params: query
        })
        // console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiGetOrder = (query) =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/order',
            params: query,
        })
        console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiGetBookMenu = (query) =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/bookmenu',
            params: query,
        })
        console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiCreateBook = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/book/create-book',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiUpdateBook = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/v1/book/update-book',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiCreateBookMenu = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/book/create-bookmenu',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiDeleteBook = (id) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(id)
        const respone = await axiosConfig({
            method: 'delete',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/book/delete-book`,
            data: id
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteBookMenu = (id) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(id)
        const respone = await axiosConfig({
            method: 'delete',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/book/delete-bookmenu`,
            data: id
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

// table


export const apiGetTable = (query) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(query)
        // if(query.id_loai == null) query.id_loai = 0
        // if(!query.ten_mon ) query.ten_mon = ""
        const respone = await axiosConfig({
            method: 'get',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/book/table`,
            params: query
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiCreateTable = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/book/create-table',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiDeleteTable = (id) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(id)
        const respone = await axiosConfig({
            method: 'delete',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/book/delete-table`,
            data: id
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdateTable = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/v1/book/update-table',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiSetTable = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/v1/book/set-table',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

// thống kê
export const apiGetStatistics = (query) =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/statistics',
            params: query,
        })
        console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiGetStatistics_year = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/statistics_year',
            // params: query,
        })
        console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})