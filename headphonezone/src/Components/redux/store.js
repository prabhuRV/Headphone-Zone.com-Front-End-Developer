import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import thunk from 'redux-thunk'
import { ProductsReduser } from "./Products/ProductsReduser";
const rootReduser=combineReducers({
products:ProductsReduser

})


export const store=createStore(rootReduser,applyMiddleware(thunk))