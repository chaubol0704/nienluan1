import { UUIDV4 } from 'sequelize'
import db from '../models'
import { v4, v5 } from 'uuid'
const UUID = require('uuid-int')
const uuid = require('uuid');

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Nhanvien, as: 'nhanvien', attributes: ['name','phone']}
            ],
            // attributes: ['id', 'title','categoryCode','createdAt']
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
            // attributes: ['id', 'title','categoryCode']
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
            // attributes: ['id', 'title','createdAt','categoryCode']
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

export const updatePostService = (data) => new Promise(async (resolve, reject) => {
    // const {postId ,...data} = data
    // const respone = await db.Post.update(payloat, {
    //     where: {id:postId}
    // })
    try {
            if (!data.id) {
                resolve({
                    err: 1,
                    message: 'not id'
                })
            }
            console.log(data)
            const post = await db.Post.findOne({
                where: {id: data.id},
                raw: false
            })
            if (!post) {
                resolve({
                    err: 1,
                    msg: 'The user is not defined'
                })
            }
            function generateId() {
            const min = 100000;
            const max = 999999;
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            return num;
            }

            const id = generateId();
            console.log(id);
            const re = await db.Image.findOrCreate({
                where: { image: data?.images },
                defaults: {
                    id: id,
                    // id,
                    image: data?.images
                    
                }
            })
           
                post.title = data.title,             
                post.content = data.content,
                post.imagesId = id,
                post.userId = data.userId,
                // post.voucherId = data.voucherId,
    
            await post.save()
            resolve({
                err: 0,
                msg: 'updated SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})
export const deletePostService = (postId) => new Promise(async (resolve, reject) => {
    try {   
            
            const post = await db.Post.findOne({
                where: {id: postId}
            })
            if (!post) {
                resolve({
                    err: 2,
                    msg: 'The post is not defined'
                })
            }

            await post.destroy();
            
            resolve({
                err: 0,
                msg: 'deleted SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})
export const createPostService = (data) => new Promise(async (resolve, reject) => {
    // console.log(data)
    try {
       
       
        // const imagesId = uuid.v4();
        // console.log(imagesId)
        // const imagesIdnum =  parseInt(imagesId.replace(/-/g, ""), 16)
        // // imagesId = imagesId%1000000
        // console.log(data)
        // const id_loai = UUID(0).uuid()
        function generateId() {
            const min = 100000;
            const max = 999999;
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            return num;
            }

            const id = generateId();
            console.log(id);
        const re = await db.Image.findOrCreate({
            where: { image: data?.images },
            defaults: {
                id: id,
                // id,
                image: data?.images
                
            }
        })
        // const re = await db.Loai_mon.findOrCreate({
        //         where: { ten_loai: data?.ten_loai },
        //         defaults: {
        //             id: id_loai,
        //             // image: data?.images
        //             ten_loai: data?.ten_loai
                    
        //         }
        //     })
        // await re.save()  
        // const imagesId = await db.Image.findOne({
        //     where: { image: data?.images },
        //     attributes: ['id']
        // })
        // console.log(id_loai)
        console.log(re)

        const response = await db.Post.build({        
                title: data?.title,
                content: data?.content,
                // voucherId: data?.voucherId,
                // imagesId: re[0].dataValues.id,
                imagesId: id,
                // userId: data?.userId,
            
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