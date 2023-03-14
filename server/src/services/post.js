import db from '../models'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Nhanvien, as: 'nhanvien', attributes: ['name','phone']}
            ],
            attributes: ['id', 'title','categoryCode']
        }) 
     
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
export const getPostsLimitService = (page,query) => new Promise(async(resolve, reject) => {
    try {
        let offset = (!page|| +page <= 1)? 0:(page - 1)
        const queries = { ...query}
        const respone = await db.Post.findAndCountAll({
            where: query,
            raw: true,
            nest: true,
            offset: offset * (+process.env.LIMIT) || 0,
            order: [['createdAt' , 'DESC']],
            limit: +process.env.LIMIT ,
            ...queries,
            include: [
                {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Nhanvien, as: 'nhanvien', attributes: ['name','phone']}
            ],
            attributes: ['id', 'title','categoryCode']
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

export const getNewPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Post.findAll({
            raw: true,
            nest: true,
            offset:  0,
            order: [['createdAt' , 'DESC']],
            limit: +process.env.LIMIT,
            include: [
                {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Nhanvien, as: 'nhanvien', attributes: ['name','phone']}
            ],
            attributes: ['id', 'title','createdAt','categoryCode']
        }) 
      //  console.log(respone);
        resolve({
            error: respone ? 0:1,
            msg: respone? 'OK': 'Get post fail.',
            respone
        })
    } catch (error) {
        reject(error)
    }
})