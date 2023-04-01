
import axiosConfig from '../axiosConfig'
import axios from 'axios'
export const apiGetPosts = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/all',
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsLimit = (page) =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit?page=${page}`,
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiGetNewPosts = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/new-post',
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdatePost = (data) =>new Promise(async(resolve, reject)=> {
    console.log(data)
    try {
        // console.log(data)
        const respone = await axiosConfig({
            method: 'put',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/post/update-post`,
            data: data
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiCreatePost = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/post/create-post',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiUploadImages = (images) => new Promise(async (resolve, reject) => {
    
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
            data: images,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiDeletePost = (id) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(id)
        const respone = await axiosConfig({
            method: 'delete',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/post/delete-post`,
            data: id
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})