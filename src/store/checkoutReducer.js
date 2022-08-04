import * as type from "./actionType";

const initialState = {
  checkoutData: [],
  orderDetail: []
}

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
    case type.ORDER_PLACED:
      return{
        ...state,
        orderDetail: {
          ...action.payload
        },
        checkoutData: [],
        kartData: []
      }
    default:
      return state
  }
}

export {checkoutReducer};