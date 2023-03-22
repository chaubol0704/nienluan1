import actionTypes from './actionTypes'
import { apiGetPosts, apiGetPostsLimit, apiGetNewPosts } from '../../services/post'
export const getPosts = () => async (dispatch) =>{
    try {
        const respone = await apiGetPosts()
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_POSTS,
                data: respone.data

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_POSTS,
                msg: respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts:null
        })
    }
}

export const getPostsLimit = (page) => async (dispatch) =>{
    try {
        const respone = await apiGetPostsLimit(page)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_POSTSLIMIT,
                data: respone.data,
                count: respone.data,

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_POSTSLIMIT,
                msg: respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTSLIMIT,
            posts:null
        })
    }
}
export const getNewPosts = () => async (dispatch) =>{
    try {
        const respone = await apiGetNewPosts()
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_NEW_POSTS,
                data: respone.data

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_NEW_POSTS,
                msg: respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_NEW_POSTS,
            posts:null
        })
    }
}

export const editPost = (dataEdit)  =>({
    type: actionTypes.EDIT_POST,
    dataEdit
})