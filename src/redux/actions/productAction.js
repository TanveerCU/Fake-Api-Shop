import { ActionTypes } from "../constants/actionTypes"

export const setProducts = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};


export const selectedProduct = (product)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};


export const cartPush = (product)=>{
    return {
        type: ActionTypes.CART_LIST,
        payload: product
    }
};

export const showProducts = (products)=>{
    return {
        type: ActionTypes.SHOW_PRODUCTS,
        payload: products
    }
};

export const formAddress = (data)=>{
    return {
        type: ActionTypes.FORM_ADDRESS,
        payload: data
    }

};

export const paymentInfo = (data)=>{
    return {
        type: ActionTypes.FORM_PAYMENT,
        payload: data
    }
};

export const invoice =(data)=>{
    return{
        type: ActionTypes.FORM_INVOICE,
        payload: data
    }
};