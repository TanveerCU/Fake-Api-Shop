import { combineReducers } from "redux";
import {signUpReducer , signInReducer, productReducer,cartList, showProductsReducer,formAddress,formPayment,formInvoice,formtemporaryInvoice } from "./productReducer";

export const rootReducer = combineReducers({
    allProducts: productReducer,
    displayProducts: showProductsReducer,
    temp:formtemporaryInvoice,
    cartList,
    formAddress,
    formPayment,
    formInvoice,
    signUpReducer,
    signInReducer

});


