
import { ActionTypes } from "../constants/actionTypes";


const initialState = {
    products:[]
}

const cartState = {
    products:[]
}

const show = {
    products:[]
}

export const productReducer =(state = initialState, {type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products: payload};
        default:
            return state;
    }

}


export const showProductsReducer = (state = show, {type,payload})=>{
    switch (type) {
        case ActionTypes.SHOW_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }

}


export const cartList = (state = cartState,{type, payload})=>{
    switch (type) {
        case ActionTypes.CART_LIST:
            return {...state, products:payload}
        default:
            return state;
    }

}

export const formAddress = (state = {} ,{type,payload})=>{
    switch (type) {
        case ActionTypes.FORM_ADDRESS:
            return {...state,...payload};
        default:
            return state;
    }

}

export const formPayment = (state = {} ,{type,payload})=>{
    switch (type) {
        case ActionTypes.FORM_PAYMENT:
            return {...state,...payload};
        default:
            return state;
    }

}

export const formInvoice = (state = {} ,{type,payload})=>{
    switch (type) {
        case ActionTypes.FORM_INVOICE:
            return {...state,...payload};
        default:
            return state;
    }

}