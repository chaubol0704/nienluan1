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