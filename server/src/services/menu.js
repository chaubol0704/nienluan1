import db from '../models'

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
        // const queries = { ...query}
        if(query.id_loai ==0) {
            query = null
        }
        const respone = await db.Mon_an.findAndCountAll({
            where: query,
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
            attributes: ['id','id_loai', 'ten_mon','anh_mon','gia','mo_ta']
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