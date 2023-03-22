import axiosConfig from '../axiosConfig'

export const apiGetCurrent = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/user/get-current',
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})
