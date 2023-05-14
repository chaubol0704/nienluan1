import * as postService from  '../services/post'


 export const getPosts = async (req, res ) => {
    try {
        const respone = await postService.getPostsService()
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}

 export const getPostsLimit = async (req, res ) => {
    const {page , ...query} = req.query
    try {
        const respone = await postService.getPostsLimitService(page, query)
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}

 export const getNewPosts = async (req, res ) => {
    try {
        const respone = await postService.getNewPostsService()
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller : ' + error,
        })
    }
}

export const updatePost = async (req, res) => {  
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not id post'
            })
        } 
        const data = req.body;
        const response = await postService.updatePostService(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const deletePost = async (req, res) => {
    
    try {
        if (!req.body.id){
            return res.status(400).json({
                err: 1,
                msg: 'Not id post'
            })
        } 
        const response = await postService.deletePostService(req.body.id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}

export const createPost = async (req, res) => {
    const data = req.body
    try {
        // if (!data) return res.status(400).json({
        //     err: 1,
        //     msg: 'Missing inputs !'
        // })
        const response = await postService.createPostService(data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}