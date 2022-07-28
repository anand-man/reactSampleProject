import { combineReducers } from "redux";
import productReducers from './productReducer';
import { kartReducer } from "./kartReducer";
import { checkoutReducer } from "./checkoutReducer";

const rootReducer = combineReducers({
    productData : productReducers,
    kartData: kartReducer,
    checkoutData: checkoutReducer
});

export default rootReducer;