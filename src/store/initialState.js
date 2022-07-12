import productAttr from "./productAttr";

export const initialState = {
  products: [],
  product: [],
  productAttr: productAttr,
  productsInKart: [],
  loadingMsg: "Please wait while we are loading the products for you! :)",
  error: ""
}