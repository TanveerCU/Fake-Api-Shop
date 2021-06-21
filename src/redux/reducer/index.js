import { combineReducers } from "redux";
import { productReducer,cartList, showProductsReducer,formAddress,formPayment,formInvoice } from "./productReducer";

export const rootReducer = combineReducers({
    allProducts: productReducer,
    displayProducts: showProductsReducer,
    cartList,
    formAddress,
    formPayment,
    formInvoice
});


