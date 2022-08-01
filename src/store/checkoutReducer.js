import * as type from "./actionType";
import { initialState } from "./initialState";

const checkoutReducer = (state = initialState, action) => {

  switch (action.type){
    case type.CUS_ADDRESS: 
    return{
      ...state,
      checkoutData: {
        ...state.checkoutData,
        ...action.payload
      }
    }
    case type.SHIPPING_METHOD:
      return{
        ...state,
        checkoutData:{
          ...state.checkoutData,
          shippingMethod: action.payload
        }
      }
    case type.PAYMENT_METHOD:
      return{
        ...state,
        checkoutData:{
          ...state.checkoutData,
          paymentInfo: action.payload
        }
      }
    default:
      return state
  }
}

export {checkoutReducer};