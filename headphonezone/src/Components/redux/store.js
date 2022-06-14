import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import thunk from 'redux-thunk'
import { HeadReduser } from "./HeadPhone/HeadReduser";
import { ProductsReduser } from "./Products/ProductsReduser";
const rootReduser=combineReducers({
products:ProductsReduser,
Hproducts:HeadReduser
})


export const store=createStore(rootReduser,applyMiddleware(thunk))