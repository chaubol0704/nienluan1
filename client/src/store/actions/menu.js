import actionTypes from './actionTypes'
import { apiGetMenu,apiGetMenuLimit} from '../../services/menu'
export const getMenu = () => async (dispatch) =>{
    try {
        const respone = await apiGetMenu()
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_MENU,
                data: respone.data

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_MENU,
                msg: respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_MENU,
            posts:null
        })
    }
}
export const getMenuLimit = (query) => async (dispatch) =>{
    try {
        const respone = await apiGetMenuLimit(query)
        // console.log(respone.data)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_MENU_LIMIT,
                data: respone.data,
                count: respone.data,

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_MENU_LIMIT,
                msg: respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_MENU_LIMIT,
            data:null
        })
    }
}

export const editMenu = (dataEdit)  =>({
    type: actionTypes.EDIT_MENU,
    dataEdit
})