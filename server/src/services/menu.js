import db from '../models'
import { Op} from 'sequelize'
import { v4 } from 'uuid'

export const getMenuService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Mon_an.findAll({
            raw: true,
            nest: true,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Loai_mon, as: 'loai', attributes: ['ten_loai']},
            ],
            attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta']
        }) 
        // console.log(respone)
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get post fail.',
            respone
        })
    } catch (error) {
        reject(error)
    }
})
// phân trang
export const getMenuLimitService = (page,query) => new Promise(async(resolve, reject) => {
    // console.log(query)
    try {
        let offset = (!page|| +page <= 1)? 0:(page - 1)
        
        // if(query.ten_mon == '' || !query.ten_mon) {
        //     query.ten_mon = null
        // }
        if(query.id_loai==0 || !query.id_loai) query.id_loai = null
        // // console.log(query)
        // if(query.id_loai==null && query.ten_mon==null)  query = null
        const respone = await db.Mon_an.findAndCountAll({
            
            where: 
             {
                [Op.or] : [
                    {
                        id_loai: query.id_loai
                   },
                   {
                     ten_mon: {
                        [Op.like]: `%${query.ten_mon}%`
                     }
                   }
                   
                ]
                              
            }
            ,
            raw: true,
            nest: true,
            offset: offset * 9 || 0,
            // order: [['createdAt' , 'DESC']],
            limit: 9 ,
            // ...queries,
            include: [
                // {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Loai_mon, as: 'loai', attributes: ['ten_loai']},
            ],
            attributes: ['id', 'ten_mon','anh_mon','gia','mo_ta','id_loai']
        }) 
        // console.log(respone);
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get post fail.',
            respone
        })
    } catch (error) {
        reject(error)
    }
})

export const updateMenuService = (data) => new Promise(async (resolve, reject) => {
    try {
            if (!data.id) {
                resolve({
                    err: 1,
                    message: 'not id'
                })
            }
            // console.log(data)
            const menu = await db.Mon_an.findOne({
                where: {id: data.id},
                raw: false
            })
            if (!menu) {
                resolve({
                    err: 1,
                    msg: 'The user is not defined'
                })
            }
           
                menu.id_loai= data.id_loai;
                menu.ten_mon= data.ten_mon;
                menu.anh_mon= data.anh_mon;
                menu.gia= data.gia;
                menu.mo_ta= data.mo_ta;
            

            await menu.save()
            resolve({
                err: 0,
                msg: 'updated SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})
export const deleteMenuService = (menuId) => new Promise(async (resolve, reject) => {
    try {   
            
            const menu = await db.Mon_an.findOne({
                where: {id: menuId}
            })
            if (!menu) {
                resolve({
                    err: 2,
                    msg: 'The menu is not defined'
                })
            }

            await menu.destroy();
            
            resolve({
                err: 0,
                msg: 'deleted SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})
export const createMenuService = (data) => new Promise(async (resolve, reject) => {
    try {
        const menu = await db.Mon_an.findOne({
                where: {ten_mon: data.ten_mon},
                raw: false
            })
        if(menu){
            resolve({
                    err: 1,
                    msg: 'Mon an da co trong menu'
                })
        }
        const response = await db.Mon_an.build({        
                id_loai: data.id_loai,
                ten_mon: data.ten_mon,
                gia: data.gia,
                anh_mon: data.anh_mon,
                mo_ta: data.mo_ta,
                id: v4()
            
        })
        await response.save()
        resolve({
            err: 0,
            msg:'Created is successfully !' ,
        })

    } catch (error) {
        reject(error)
    }
})