
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


const invoiceData = {
    data:[]
}

const tempinvoiceData = {
    cartData:[],
    shippingAddress:[],
    cardData:[],
    total:''
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

export const formInvoice = (state = invoiceData ,{type,payload})=>{
    switch (type) {
        case ActionTypes.FORM_INVOICE:
            return {...state, data: payload};
        default:
            return state;
    }

}
export const formtemporaryInvoice = (state = tempinvoiceData ,{type,payload})=>{
    switch (type) {
        case ActionTypes.TEMP_FORM_INVOICE:
            return {...state,...payload};
        default:
            return state;
    }

}

export const signInReducer = (state = "" ,{type,payload})=>{
    switch (type) {
        case ActionTypes.SIGNIN:
            return payload;
        default:
            return state;
    }

}

export const signUpReducer = (state = '' ,{type,payload})=>{
    switch (type) {
        case ActionTypes.SIGNUP:
            return payload;
        default:
            return state;
    }

}