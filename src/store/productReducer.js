
import * as types from './actionType';
import productAttr from './productAttr';

const initialState = {
    products: [],
    product: [],
    productAttr: productAttr,
    loadingMsg: "Please wait while we are loading the products for you! :)",
    error: "",
  }

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                error: action.error
            };
        case types.GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state;
    }
}

export default productReducers;