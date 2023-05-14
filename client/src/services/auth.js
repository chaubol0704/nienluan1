import axiosConfig from '../axiosConfig';

export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiLogin = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetUser = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/auth/all',
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiDeleteUser = (id) =>new Promise(async(resolve, reject)=> {
    try {
        // console.log(id)
        const respone = await axiosConfig({
            method: 'delete',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/auth/delete-user`,
            data: id
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
export const apiUpdateUser = (data) =>new Promise(async(resolve, reject)=> {
    try {
        console.log(data)
        const respone = await axiosConfig({
            method: 'put',
            // url: `/api/v1/menu/limit?page=${page}`,
            url: `/api/v1/auth/update-user`,
            data: data
            
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
