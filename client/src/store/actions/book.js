import actionTypes from './actionTypes'
import * as apis from '../../services'

export const getOrder = (query) => async (dispatch) =>{
    try {
        const respone = await apis.apiGetOrder(query)
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_ORDER,
                order: respone.data.respone

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_ORDER,
                msg: respone.data.msg,
                order: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ORDER,
            msg: error,
            order:null
        })
    }
}
