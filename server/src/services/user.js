import db from '../models'

// export const getOne = (id) => new Promise(async(resolve, reject) => {
//     try {
//         const respone = await db.Khachhang.findOne({
//             where: {id},
//             raw: true,
//             // attributes: {
//             //     exclude: ['password'] // bỏ password ra
//             // }
//         }) 
//         resolve({
//             error: respone ? 0:1,
//             msg: respone? 'OK': 'Get user fail.',
//             respone
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

export const getOne = (id) => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.User.findOne({
            where: {id},
            raw: true,
            // attributes: {
            //     exclude: ['password'] // bỏ password ra
            // }
        }) 
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get user fail.',
            respone
        })
    } catch (error) {
        reject(error)
    }
})