import actionTypes from "../actions/actionTypes";

const initState = {
    order: [],
    orderMenu: [],
    allorder: [],
    all: [],
    count: 0,
    dataEdit: {},
    dataBook: {},
    dataTable: {},
    table: [],
    count_table: 0,
    count_statistics: 0,
    count_statistics_year: [],
    // dataTable
}

const bookReducer = (state = initState, action) => {
    
    switch(action.type){
        case actionTypes.GET_ORDER:
            return {
                ...state,
                order: action.order || [],
                orderMenu: action.orderMenu || []
            }

        case actionTypes.GET_ALLORDER:
            // console.log(action.data)
            return {
                ...state,             
                allorder: action.data.respone.rows || [],
                // msg: action.data.msg || '',
                count: action.count.respone.count || 0
            }
        case actionTypes.GET_ALL:
            // console.log(action.data)
            return {
                ...state,             
                all: action.data.respone || [],
                // msg: action.data.msg || '',
                // count: action.count.respone.count || 0
            }
        case actionTypes.GET_TABLE:
            // console.log(action.data)
            return {
                ...state,             
                table: action.data.respone.rows || [],
                // msg: action.data.msg || '',
                count_table: action.count.respone.count || 0
            }
        case actionTypes.EDIT_BOOK:
            return{
                ...state,
                dataEdit: action.dataEdit || {}
            }
        case actionTypes.EDIT_BOOKMENU:
            return{
                ...state,
                dataBook: action.dataBook || {}
            }
        case actionTypes.EDIT_TABLE:
            return{
                ...state,
                dataTable: action.dataTable || {}
            }
        case actionTypes.GET_STATISTICS:
            // console.log(action.data)
            return {
                ...state,             
                // allorder: action.data.respone.rows || [],
                // msg: action.data.msg || '',
                count_statistics: action.count.respone.count || 0
            }
        case actionTypes.GET_STATISTICS_YEAR:
            // console.log(action.data)
            return {
                ...state,             
                // allorder: action.data.respone.rows || [],
                // msg: action.data.msg || '',
                count_statistics_year: action.count.respone || []
            }
        default:
            return state;
    }
}
export default bookReducer;