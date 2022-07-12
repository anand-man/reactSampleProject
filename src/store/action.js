import axios from "axios";
import * as type from './actionType';

const getProducts = (productsData) => ({
    type: type.GET_PRODUCTS,
    payload: productsData,
    error: ""
});

const getProduct = (product) => ({
    type: type.GET_SINGLE_PRODUCT,
    payload: product,
});


export const loadProducts = () => {
    return function(dispatch) {
        axios.get("https://fakestoreapi.com/products?sort=desc").then((res) => {
            dispatch(getProducts(res.data));
        }).catch((error) => {
            error = new Error("Something went wrong!");
            dispatch(getProduct(error));
        });
    };
};

export const getSingleProduct = (id) => {
    return function(dispatch) {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            dispatch(getProduct(res.data));
        }).catch((error) => console.log(error));
    };
};

export const getKartNotification = (product) => {
    return {
        type: type.KART_NOTIFICATION,
        payload: product,
    };
};

export const removeItem = (id) => {
    return {
        type: type.REMOVE_ITEM,
        payload: id
    };
};

export const increaseItem = (id) => {
    return {
        type: type.INCREASE_ITEM,
        payload: id,
    }
};

export const decreaseItem = (id) => {
    return {
        type: type.DECREASE_ITEM,
        payload: id
    }
}