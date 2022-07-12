import { combineReducers } from "redux";
import productReducers from './productReducer';
import { kartReducer } from "./kartReducer";

const rootReducer = combineReducers({
    productData : productReducers,
    kartData: kartReducer
});

export default rootReducer;