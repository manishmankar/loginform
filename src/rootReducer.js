import { combineReducers } from "redux"
import {productMSTSlice} from './productMSTRedux'
const rootReducer = combineReducers({
    [productMSTSlice.name]:productMSTSlice.reducer,
})

export default rootReducer;