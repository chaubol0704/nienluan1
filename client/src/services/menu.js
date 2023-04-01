import axiosConfig from '../axiosConfig'
import axios from 'axios'

export const apiGetMenu = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/menu/all',
        })
        // console.log(respone)
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiGetMenuLimit = (query) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(query)
        if(query.id_loai == null) query.id_loai = 0
        if(!query.ten_mon ) query.ten_mon = ""
        const respone = await axiosConfig({
            method: 'get',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/menu/limit`,
            params: query
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdateMenu = (data) =>new Promise(async(resolve, reject)=> {
    console.log(data)
    try {
        // console.log(data)
        const respone = await axiosConfig({
            method: 'put',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/menu/update-menu`,
            data: data
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiCreateMenu = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/menu/create-menu',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiDeleteMenu = (id) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(id)
        const respone = await axiosConfig({
            method: 'delete',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/menu/delete-menu`,
            data: id
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})