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
                order: respone.data.respone,
                orderMenu: respone.data.responeMenu

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_ORDER,
                msg: respone.data.msg,
                order: null,
                orderMenu: null
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
export const getAll = () => async (dispatch) =>{
    try {
        const respone = await apis.apiGetAll()
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_ALL,
                data: respone.data,
                // count: respone.data,

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_ALL,
                msg: respone.data.msg,
                data: null,
                // orderMenu: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALL,
            msg: error,
            data:null
        })
    }
}
export const getAllOrder = (query) => async (dispatch) =>{
    try {
        const respone = await apis.apiGetAllOrder(query)
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_ALLORDER,
                data: respone.data,
                count: respone.data,

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_ALLORDER,
                msg: respone.data.msg,
                data: null,
                // orderMenu: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ALLORDER,
            msg: error,
            data:null
        })
    }
}

export const getTable = (query) => async (dispatch) =>{
    try {
        const respone = await apis.apiGetTable(query)
      
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_TABLE,
                data: respone.data,
                count: respone.data

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_TABLE,
                msg: respone.data.msg,
                data: null,
                // orderMenu: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_TABLE,
            msg: error,
            data:null
        })
    }
}

export const editBook = (dataEdit)  =>({
    type: actionTypes.EDIT_BOOK,
    dataEdit
})
export const editBookMenu = (dataBook)  =>({
    type: actionTypes.EDIT_BOOKMENU,
    dataBook
})
export const editTable = (dataTable)  =>({
    type: actionTypes.EDIT_TABLE,
    dataTable
})
// thống kê
export const getStatistics = (query) => async (dispatch) =>{
    try {
        const respone = await apis.apiGetStatistics(query)
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_STATISTICS,
                data: respone.data,
                count: respone.data,

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_STATISTICS,
                msg: respone.data.msg,
                data: null,
                // orderMenu: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STATISTICS,
            msg: error,
            data:null
        })
    }
}

export const getStatistics_year = () => async (dispatch) =>{
    try {
        const respone = await apis.apiGetStatistics_year()
        console.log(respone)
        if (respone?.data.msg  === "OK"){
            dispatch({
                // truyền mảng lưu trong redux
                type: actionTypes.GET_STATISTICS_YEAR,
                data: respone.data,
                count: respone.data,

            })
        }
        else {
             dispatch({
                type: actionTypes.GET_STATISTICS_YEAR,
                msg: respone.data.msg,
                data: null,
                // orderMenu: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STATISTICS_YEAR,
            msg: error,
            data:null
        })
    }
}