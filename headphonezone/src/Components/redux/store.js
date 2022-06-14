import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import thunk from 'redux-thunk'
import { Addreducer } from "./AddtoCart/Addreducer";
import { HeadReduser } from "./HeadPhone/HeadReduser";
import { ProductsReduser } from "./Products/ProductsReduser";
const rootReduser=combineReducers({
products:ProductsReduser,
Hproducts:HeadReduser,
AddtoCart:Addreducer
})


export const store=createStore(rootReduser,applyMiddleware(thunk))