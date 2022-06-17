import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import thunk from "redux-thunk";
import { Addreducer } from "./AddtoCart/Addreducer";
import { HeadReduser } from "./HeadPhone/HeadReduser";
import { HiRelplayerReduser } from "./HiReplayer/ProductsReduser";
import { loginReducer } from "./Login/logInRedusre";
import { PortableAmpReduser } from "./PoratableAmp/ProductsReduser";


import { ProductsReduser } from "./Products/ProductsReduser";
import { RegristionReducer } from "./Rigistration/registrationRedusre";
const rootReduser = combineReducers({
  products: ProductsReduser,
  Hproducts: HeadReduser,
  AddtoCart: Addreducer,
  registration: RegristionReducer,
  login: loginReducer,
  Protableproducts:PortableAmpReduser,
  Hireplayerproducts:HiRelplayerReduser

});

export const store = createStore(rootReduser, applyMiddleware(thunk));
