
import * as types from './actionType';
import { initialState } from './initialState';

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