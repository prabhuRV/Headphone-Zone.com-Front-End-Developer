import { GETDATA_FALIAURE, GETDATA_REQUEST, GETDATA_SUCCESS, SINGLE_GET_PRODUCT_SUCCESS } from "../actionTypes"

const intialState={
    products:[],
    isLoading:false,
    isError:"",
    SingleProduct:[]
}

export const ProductsReduser=(state=intialState,action)=>
{
const {type,payload} =action 
switch(type)
{
    case GETDATA_REQUEST:
        {
            return {
                ...state,
                isError:"",
                isLoading:true
            }
        };
        case GETDATA_SUCCESS:
            {
                return {
                    ...state,
                    isError:"",
                    isLoading:false,
                    products:payload
                }
            };
            case SINGLE_GET_PRODUCT_SUCCESS:
                {
                return{    ...state,
                    isError:"",
                    isLoading:false,
                    SingleProduct:payload  
                }
                }
            case GETDATA_FALIAURE:
                {
                    return {
                        ...state,
                        isError:payload,
                        isLoading:false,
                        products:null
                    }
                };
                default: {
                    return { ...state };
                  }
}  
}