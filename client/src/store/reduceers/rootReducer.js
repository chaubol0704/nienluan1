import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import postReducer from "./postReducer";
import menuReducer from "./menuReducer";
import bookReducer from "./bookReducer";
const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn' ,'token']
}

const  rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
    post: postReducer,
    menu: menuReducer,
    book: bookReducer,
})

export default rootReducer