import axiosConfig from '../axiosConfig'
import axios from 'axios'

export const apiGetAllOrder = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/book/all',
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
        // console.log(respone)
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