import * as type from "./actionType";
import { initialState } from "./initialState";

const checkoutReducer = (state = initialState, action) => {

  switch (action.type){
    case type.CUS_ADDRESS: 
    console.log(action.payload)

    default:
      return state
  }
}

export {checkoutReducer};