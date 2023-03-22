import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const registerService = (payload) => new Promise(async (resolve, reject) => {
    console.log(payload)
    try {
        const response = await db.Khachhang.findOrCreate({
            where: { phone: payload.phone },
            defaults: {
                phone: payload.phone,
                name: payload.name,
                password: hashPassword(payload.password),
                email: payload.email,
                dia_chi: payload.dia_chi,
                gender: payload.gender,
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, { expiresIn: '2d' })
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Register is successfully !' : 'Phone number has been aldready used !',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})



export const loginService = ({ phone, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Khachhang.findOne({
            where: { phone },
            raw: true
        })
        const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
        const token = isCorrectPassword && jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '2d' })
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Login is successfully !' : response ? 'Password is wrong !' : 'Phone number not found !',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})
export const updateUserService = (data) => new Promise(async (resolve, reject) => {
    try {
            if (!data.id) {
                resolve({
                    err: 1,
                    message: 'not id'
                })
            }
            console.log(data)
            const checkUser = await db.Khachhang.findOne({
                where: {id: data.id},
                raw: false
            })
            if (!checkUser) {
                resolve({
                    err: 1,
                    msg: 'The user is not defined'
                })
            }
           
                checkUser.name= data.name;
                checkUser.dia_chi= data.dia_chi;
                checkUser.email= data.email;
  
            

            await checkUser.save()
            resolve({
                err: 0,
                msg: 'updated SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})
export const deleteUserService = (userId) => new Promise(async (resolve, reject) => {
    try {   
            
            const user = await db.Khachhang.findOne({
                where: {id: userId}
            })
            if (!user) {
                resolve({
                    err: 2,
                    msg: 'The user is not defined'
                })
            }

            await user.destroy();
            
            resolve({
                err: 0,
                msg: 'deleted SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
})

export const getUserService = () => new Promise(async(resolve, reject) => {
    try {
        const respone = await db.Khachhang.findAll({
            raw: true,
            nest: true,
            // include: [
            //     {model: db.Image, as: 'images', attributes: ['image']},
            //     {model: db.Nhanvien, as: 'nhanvien', attributes: ['name','phone']}
            // ],
            // attributes: ['id', 'name','dia_chi','phone']
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