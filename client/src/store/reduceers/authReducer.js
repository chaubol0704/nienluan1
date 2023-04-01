import actionTypes from "../actions/actionTypes";



const initState = {
    isLoggedIn: false,
    token: null,
    msg: '',
    user: [], 
    count_user: 0,
    update: false,
    dataEdit: {}
}


const authReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn: false,
                token: action.data,
                msg:''
            }
        case actionTypes.LOGIN_SUCCESS:
            
            return{
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg:''
            }
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                isLoggedIn:false,
                token: null,
                msg:''
            }
        case actionTypes.GET_USER:
           return{
            ...state,
            user: action.data.respone || [],
            msg: action.data.msg || ''
           }
        case actionTypes.EDIT_USER:
            return{
                ...state,
                dataEdit: action.dataEdit || {}
            }
        default:
            return state;
    }
}
export default authReducer;