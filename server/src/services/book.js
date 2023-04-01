import db from '../models'
import { Op} from 'sequelize'
import { v4 } from 'uuid'
const UUID = require('uuid-int')


export const getBookTableService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Quan_ly_dat_ban.findAll({
            raw: true,
            nest: true,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Ban, as: 'ban'},
            ],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        // console.log(respone)
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get booktable fail.',
            respone
        })
    } catch (error) {
        reject(error)
    }
})
export const getBookTableUser = (query) => new Promise(async(resolve, reject) => {

    try {
        // const user = await db.Khachhang.findOne({
        //     where: {phone},
        //     raw: true,
        //     // attributes: {
        //     //     exclude: ['password'] // bỏ password ra
        //     // }
        // })

        const respone = await db.DetailBooking.findAll({
            where: {phone: query.phone},
            raw: true,
            nest: true,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Quan_ly_dat_ban, as: 'bookban'},
                {model: db.Quan_ly_dat_mon, as: 'bookmon'},
                // {model: db.Ban, as: 'ban'},
            ],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        // console.log(respone)
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get booktable fail.',
            respone
        })
    } catch (error) {
        reject(error)
    }
})


export const deleteBookService = (bookId) => new Promise(async (resolve, reject) => {
    try {   
            
            const book = await db.DetailBooking.findOne({
                where: {id: bookId},
                
            })
            console.log(book)
            if (!book) {
                resolve({
                    err: 2,
                    msg: 'booking is not defined'
                })
            }
            const ql_ban = await db.Quan_ly_dat_ban.findOne({
                where: {id: book.dataValues.id_book}
            })

            await ql_ban.destroy();
            await book.destroy();
            
            resolve({
                err: 0,
                msg: 'deleted SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})

export const createBookService = (data) => new Promise(async (resolve, reject) => {
    try {

        const ban = await db.Ban.findAll({
            where:{
                so_ghe: {[Op.gte]: data.guests,},
                trang_thai: 'trống'
            },
            raw: true
        })
       
        const ql_ban = await db.Quan_ly_dat_ban.build({
                id_ban: ban[0].id,
                so_nguoi: data.guests,
                // id: v4()
        })
        await ql_ban.save()
        // console.log(ql_ban)
        let date = data.date+  ' '+  data.time 
        // console.log(data.date)
        // console.log(data.time)
        // console.log(date)
        const detail = await db.DetailBooking.build({
                id_book: ql_ban.dataValues.id,
                name: data.name,
                phone: data.phone,
                email: data.email,
                time_book: date,

                // id: v4()
        })
        await detail.save()
        console.log(detail)
        // const menu = await db.Mon_an.findOne({
        //         where: {ten_mon: data.ten_mon},
        //         raw: false
        //     })
        // if(menu){
        //     resolve({
        //             err: 1,
        //             msg: 'Mon an da co trong menu'
        //         })
        // }
        

        // const response = await db.Mon_an.build({        
        //         id_loai: id_l,
        //         ten_mon: data.ten_mon,
        //         gia: data.gia,
        //         anh_mon: data.anh_mon,
        //         mo_ta: data.mo_ta,
        //         id: v4()
            
        // })
        // await response.save()
        resolve({
            err: 0,
            msg:'Created is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})