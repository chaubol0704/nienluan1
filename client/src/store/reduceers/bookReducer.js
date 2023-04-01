import actionTypes from "../actions/actionTypes";

const initState = {
    order: []
}

const bookReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.GET_ORDER:
            return {
                ...state,
                order: action.order || []
            }

        default:
            return state;
    }
}
export default bookReducer;