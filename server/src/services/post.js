import db from '../models'
import { v4 } from 'uuid'
const UUID = require('uuid-int')

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
           
                post.title = data.title,             
                post.content = data.content,
                post.imagesId = data.imagesId,
                post.userId = data.userId,
                post.voucherId = data.voucherId,
    
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
    console.log(data)
    try {
       
        // const post = await db.Post.findOne({
        //         where: {id: data.id},
        //         raw: false
        //     })
        // if(post){
        //     resolve({
        //             err: 1,
        //             msg: 'Mon an da co trong post'
        //         })
        // }
        const imagesId = UUID(0).uuid()
        const re = await db.Image.findOrCreate({
            where: { image: data?.images },
            defaults: {
                id: imagesId,
                image: data?.images
                
            }
        })
        // const imagesId = await db.Image.findOne({
        //     where: { image: data?.images },
        //     attributes: ['id']
        // })
        console.log(imagesId)
        const response = await db.Post.build({        
                title: data?.title,
                content: data?.content,
                voucherId: data?.voucherId,
                imagesId: imagesId,
                userId: data?.userId,
            
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