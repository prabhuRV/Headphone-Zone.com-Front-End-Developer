import { GETDATA_FALIAURE, GETDATA_REQUEST, GETDATA_SUCCESS, SINGLE_GET_PRODUCT_SUCCESS } from "../actionTypes"

const intialState={
    Protableproducts:[],
    isLoading:false,
    isError:"",
    SingleProduct:[]
}

export const PortableAmpReduser=(state=intialState,action)=>
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
                    Protableproducts:payload
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
                        Protableproducts:null
                    }
                };
                default: {
                    return { ...state };
                  }
}  
}