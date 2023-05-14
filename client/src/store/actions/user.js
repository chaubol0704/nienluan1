import actionTypes from './actionTypes'
import * as apis from '../../services'
export const getCurrent = () => async (dispatch) =>{
    try {
        const respone = await apis.apiGetCurrent()
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_CURRENT,
                currentData: respone.data.respone

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_CURRENT,
                msg: respone.data.msg,
                currentData: null
            })
            dispatch({
                type: actionTypes.LOGOUT,
                
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT,
            msg: error,
            currentData:null
        })
        dispatch({
                type: actionTypes.LOGOUT,
                
            })
    }
}

