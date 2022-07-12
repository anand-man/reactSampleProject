import * as type from './actionType';
import { initialState } from './initialState';

const kartReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.KART_NOTIFICATION:
      let updatedItems
      const existingKartIndex = state.productsInKart.findIndex(item => { return item.id === action.payload.id });
      const existingKartItems = state.productsInKart[existingKartIndex];
      if (existingKartIndex >= 0) {
        const addItem = {
          ...existingKartItems,
          totalItem: existingKartItems.totalItem + action.payload.totalItem
        }
        updatedItems = [...state.productsInKart];
        updatedItems[existingKartIndex] = addItem;
      }
      else updatedItems = [...state.productsInKart, action.payload];
      return {
        ...state,
        productsInKart: updatedItems,
      }
    case type.REMOVE_ITEM:
      const productsLeftInKart = state.productsInKart.filter(item => { return item.id !== action.payload });
      return {
        ...state,
        productsInKart: productsLeftInKart,
      }
    case type.INCREASE_ITEM:
      let increasedProduct;
      const increaseItemIndex = state.productsInKart.findIndex(item => { return item.id === action.payload });
      const increaseProduct = state.productsInKart[increaseItemIndex];
      increasedProduct = [...state.productsInKart]
      const updatedProduct = {
        ...increaseProduct,
        totalItem: increaseProduct.totalItem + 1,
      }
      increasedProduct[increaseItemIndex] = updatedProduct;
      return {
        ...state,
        productsInKart: increasedProduct
      }
    case type.DECREASE_ITEM:
      let decreasedProduct;
      const decreaseItemIndex = state.productsInKart.findIndex(item => { return item.id === action.payload });
      const decreaseProduct = state.productsInKart[decreaseItemIndex];
      decreasedProduct = [...state.productsInKart]
      const updatedProductinKart = {
        ...decreaseProduct,
        totalItem: decreaseProduct.totalItem - 1,
      }
      decreasedProduct[decreaseItemIndex] = updatedProductinKart;
      return {
        ...state,
        productsInKart: decreasedProduct
      }
    default:
      return state
  }
}

export { kartReducer };