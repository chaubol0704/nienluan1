import db from '../models'
import { Op, where,Sequelize} from 'sequelize'
import { v4 } from 'uuid'
const UUID = require('uuid-int')


export const getTable = (page,query) => new Promise(async(resolve, reject) => {
    try {
        let offset = (!page || +page <= 1) ? 0 : (+page - 1)
        // const queries = { ...query }
        // let trang_thai = query.trang_thai
        // let so_ghe = query.so_ghe
        let trang_thai, so_ghe, queries
        if (!query.trang_thai){
             delete query[query.trang_thai]
        } 
        if (!query.so_ghe){
             delete query[query.so_ghe]
        } 
        const respone = await db.Ban.findAndCountAll({
            where:query,
            offset: offset * 10 || 0,
            limit: 10,
            raw: true,
            nest: true,
            // include: [
            //     // {model: db.Image, as: 'images', attributes: ['image']},
            //     {model: db.Ban, as: 'ban'},
            // ],
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
export const createTable = (data) => new Promise(async (resolve, reject) => {
    try {
        const ql_ban = await db.Ban.build({
                so_ghe: data.so_ghe,
                trang_thai: 'trống'
                // id: v4()
        })
        await ql_ban.save()
        // console.log(ql_ban)
        resolve({
            err: 0,
            msg:'Created is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})
export const updateTable = (data) => new Promise(async (resolve, reject) => {
    try {
        await db.Ban.update({
            trang_thai: data?.trang_thai,
            so_ghe: data?.so_ghe
        }, {
            where: {
                id: data.id
            }
        })
        resolve({
            err: 0,
            msg:'Created is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})
export const setTable = (data) => new Promise(async (resolve, reject) => {
    try {
        await db.Ban.update({
            trang_thai: 'trống',
            // so_ghe: data?.so_ghe
        }, {
            where: {
                id: data.id
            }
        })
        resolve({
            err: 0,
            msg:'Set table is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})

export const deleteTable = (tableId) => new Promise(async (resolve, reject) => {
    try {   
            if (!tableId) {
                resolve({
                    err: 2,
                    msg: 'table is not defined'
                })
            }
            const book = await db.Ban.findOne({
                where: {id: tableId},
                
            })
            console.log(book)
            
            await book.destroy();
            
            resolve({
                err: 0,
                msg: 'deleted SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})

export const getBookTableService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.DetailBooking.findAll({
            raw: true,
            nest: true,
            order: [['time_book']],
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Quan_ly_dat_ban, as: 'bookban'},
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
export const getBookMenuService = (query) => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Quan_ly_dat_mon.findAll({
            where: {id_bookM: query?.id},
            raw: true,
            nest: true,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Mon_an, as: 'mon'},
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
                // {model: db.Quan_ly_dat_mon, as: 'bookmon'},
                // {model: db.Mon_an, as: 'mon'},
            ],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
         console.log(respone)
         console.log(query)
         const id = query?.id || respone[0].id
        const responeMenu = await db.Quan_ly_dat_mon.findAll({
            where: {id_bookM: id},
            raw: true,
            nest: true,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                
                {model: db.Mon_an, as: 'mon'},
                // {model: db.Mon_an, as: 'mon'},
            ],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        // console.log(responeMenu)
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get booktable fail.',
            respone,
            responeMenu
        })
    } catch (error) {
        reject(error)
    }
})

export const statistics = (query) => new Promise(async(resolve, reject) => {

    try {
        // let offset = (!page|| +page <= 1)? 0:(page - 1)
        // if(query.id_loai==0 || !query.id_loai) query.id_loai = null
        
        // const count = await Order.count({
        //     where: {
        //     createdAt: {
        //         [Op.between]: [query?.startDate, query?.endDate],
        //     },
        //     },
        // });
        console.log(query)
        const respone = await db.DetailBooking.findAndCountAll({
            
            where: {
                time_book: {
                    [Op.between]: [query.startDate,query.endDate],
                },
            },
            raw: true,
            nest: true,
            
            // // order: [['time_book' , 'DESC']],
            // // limit: 8 ,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Quan_ly_dat_ban, as: 'bookban'},
                // {model: db.Quan_ly_dat_mon, as: 'bookmon'},
                // {model: db.Mon_an, as: 'mon'},
            ],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get booktable fail.',
            respone,
            // responeMenu
        })
    } catch (error) {
        reject(error)
    }
})
export const statistics_year = () => new Promise(async(resolve, reject) => {

    try {
        // let offset = (!page|| +page <= 1)? 0:(page - 1)
        // if(query.id_loai==0 || !query.id_loai) query.id_loai = null
        
        // const count = await Order.count({
        //     where: {
        //     createdAt: {
        //         [Op.between]: [query?.startDate, query?.endDate],
        //     },
        //     },
        // });
        // console.log(query)
        const respone = await db.DetailBooking.count({
            
            where: {
                time_book:Sequelize.where(
                    Sequelize.fn("YEAR", Sequelize.col("time_book")),
                    "2023"
                    ),
            },
            // raw: true,
            // nest: true,
            
            // // order: [['time_book' , 'DESC']],
            // // limit: 8 ,
            attributes: [
                /* add other attributes you may need from your table */
                [Sequelize.fn('MONTH', Sequelize.col('time_book')), 'month']
            ],
            group: ['month'],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get booktable fail.',
            respone,
            // responeMenu
        })
    } catch (error) {
        reject(error)
    }
})
export const getBookTable = (page,query) => new Promise(async(resolve, reject) => {

    try {
        let offset = (!page|| +page <= 1)? 0:(page - 1)
        // if(query.id_loai==0 || !query.id_loai) query.id_loai = null
        if( !query.phone) query.phone = null

        const respone = await db.DetailBooking.findAndCountAll({
            // where: 
            //  {
            //     phone: [
            //         query?.phone,
            //         `%`
            //     ]
            //     // [Op.or] : [
            //     //     {
            //     //         phone: query?.phone
            //     //    },
            //     // //    {
            //     // //      ten_mon: {
            //     // //         [Op.like]: `%${query.ten_mon}%`
            //     // //      }
            //     // //    }
                   
            //     // ]
                              
            // },
            raw: true,
            nest: true,
            offset: offset * 8 || 0,
            order: [['time_book' , 'DESC']],
            limit: 8 ,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Quan_ly_dat_ban, as: 'bookban'},
                // {model: db.Quan_ly_dat_mon, as: 'bookmon'},
                // {model: db.Mon_an, as: 'mon'},
            ],
            // attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get booktable fail.',
            respone,
            // responeMenu
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
            // console.log(book)
            if (!book) {
                resolve({
                    err: 2,
                    msg: 'booking is not defined'
                })
            }
            const ql_ban = await db.Quan_ly_dat_ban.findOne({
                where: {id: book.dataValues.id_book}
            })
            // cap nhat tt ban
            await db.Ban.update({
                trang_thai: "Bận"
            }, {
                where: {
                    id: ql_ban.id_ban
                }
            })
            // const ql_mon = await db.Quan_ly_dat_mon.findAll({
            //     where: {id_bookM: book.dataValues.id}
            // })
            // console.log(ql_mon)
            await db.Quan_ly_dat_mon.destroy({
                where: {id_bookM: book.dataValues.id}
            })
            // await ql_mon.destroy();
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
            raw: true,
            trang_thai : 'bận'
        })
   
        await db.Ban.update({
            trang_thai: "Bận"
        }, {
            where: {
                id: ban[0].id
            }
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
export const updateBookService = (data) => new Promise(async (resolve, reject) => {
    try {
        const check_ban = await db.Quan_ly_dat_ban.findOne({
                where: {id: data?.id_book}
        })
        let id_book = data.id_book
        if(check_ban.so_nguoi != data.guests){
            await db.Ban.update({
                trang_thai: "trống"
            }, {
                where: {
                    id: check_ban.id_ban
                }
            })
            const ban = await db.Ban.findAll({
                where:{
                    so_ghe: {[Op.gte]: data.guests,},
                    trang_thai: 'trống'
                },
                raw: true,
                trang_thai : 'bận'
            })
            await db.Ban.update({
                trang_thai: "Bận"
            }, {
                where: {
                    id: ban[0].id
                }
            })
            check_ban.id_ban = ban[0].id
            check_ban.so_nguoi = data.guests
            // const ql_ban = await db.Quan_ly_dat_ban.build({
            //     id_ban: ban[0].id,
            //     so_nguoi: data.guests,
            //     // id: v4()
            // })
            await check_ban.save()
            // cap nhat ql ban
            // id_book = ql_ban.dataValues.id
        }        
        
        // console.log(ql_ban)
        let date = data.date+  ' '+  data.time 
        // console.log(data.date)
        // console.log(data.time)
        // console.log(date)
        const detail = await db.DetailBooking.findOne({
                where: {id: data.id}

                // id: v4()
        })
                detail.name =  data.name,
                detail.phone    =  data.phone,
                detail.email    =  data.email,
                detail.time_book    =  date,
        await detail.save()
        console.log(detail)
        resolve({
            err: 0,
            msg:'Update is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})

export const createBookMenu = (dataBook) => new Promise(async (resolve, reject) => {
    try {
        if(!dataBook || !dataBook.id_book){
            resolve({
                    err: 2,
                    msg: 'booking is not defined'
                })
        }
        
        
        const respone = await db.Quan_ly_dat_mon.build({
                id_bookM: dataBook.id_book,
                id_mon: dataBook.id_mon,
                so_luong: dataBook.so_luong,
                don_gia: dataBook.don_gia
               
        })
        await respone.save()
   
        resolve({
            err: 0,
            msg:'Created is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})

export const deleteBookMenuService = (bookId) => new Promise(async (resolve, reject) => {
    try {   
            if (!bookId) {
                resolve({
                    err: 2,
                    msg: 'booking is not defined'
                })
            }
            const book = await db.Quan_ly_dat_mon.findOne({
                where: {id: bookId},
                
            })
            console.log(book)
            
            await book.destroy();
            
            resolve({
                err: 0,
                msg: 'deleted SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})