import authRouter from './auth'
import postRouter from './post'
import userRouter from './user'
import menuRouter from './menu'
const initRoutes = (app) =>{
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/post', postRouter)
    app.use('/api/v1/user', userRouter)
    app.use('/api/v1/menu', menuRouter)
    return app.use('/', (req,res )=>{
        res.send('server on ..')
    })
}

export default initRoutes;