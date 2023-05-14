import actionTypes from "../actions/actionTypes";

const initState = {
    menu: [], 
    msg: '',
    count_menu: 0,
    dataEdit: {},
    data: []
}

const menuReducer = (state= initState, action) => {

    // console.log(action);
    switch (action.type) {
        
        case actionTypes.GET_MENU:
           return{
            ...state,
            menu: action.data.respone || [],
            msg: action.data.msg || ''
           }
        case actionTypes.GET_MENU_LIMIT:
           return{
            ...state,
            menu: action.data.respone.rows || [],
            msg: action.data.msg || '',
            count_menu: action.count.respone.count || 0
           }
        case actionTypes.EDIT_MENU:
            return{
                ...state,
                dataEdit: action.dataEdit || {}
            }
        case actionTypes.SAVEDATA:
            return{
                ...state,
                data: action.data || []
            }
        default:
            return state;
    }
}


export default menuReducer