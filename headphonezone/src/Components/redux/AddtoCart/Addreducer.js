import { GET_CART_FALIURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "../actionTypes"


const intialState={

    isLoading:false,
    isError:"",
    AddtoCart:[]
}

export const Addreducer=(state=intialState,action)=>
{
const {type,payload} =action 
switch(type)
{
    case GET_CART_REQUEST:
        {
            return {
                ...state,
                isError:"",
                isLoading:true
            }
        };
        case GET_CART_SUCCESS:
            {
                return {
                    ...state,
                    isError:"",
                    isLoading:false,
                    AddtoCart:payload
                }
            };
            case GET_CART_FALIURE:
                {
                    return {
                        ...state,
                        isError:payload,
                        isLoading:false,
                        AddtoCart:null
                    }
                };
                default: {
                    return { ...state };
                  }
}  
}