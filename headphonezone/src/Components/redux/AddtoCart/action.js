import axios from "axios";
import { ADD_TOCART_FAILURE, ADD_TOCART_REQUEST, ADD_TOCART_SUCCESS, DELETE_FROM_CART, GET_CART_FALIURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "../actionTypes";

export const addtocart = async ({ SingleProduct, dispatch}) => {

       dispatch({
         type: ADD_TOCART_REQUEST,
       });
       return axios({
         url: "https://headphone-zone-api.herokuapp.com/addtocart",
         method: "post",
         data: {
          image:SingleProduct.image,
          price:SingleProduct.price,
          ratings:SingleProduct.ratings,
          userid:SingleProduct.id,
          name:SingleProduct.product_title,
          quantity:SingleProduct.quantity,
          Product_url:SingleProduct.Product_url,
          totalPrice:SingleProduct.price,
         },
       })
         .then((res) => {
            console.log(res.data);
           dispatch({ type: ADD_TOCART_SUCCESS, });
         })
         .catch((err) => {
           console.log(err);
           dispatch({ type: ADD_TOCART_FAILURE });
         });
     };

     export const getCart = async (dispatch) => {
        dispatch({
          type: GET_CART_REQUEST
        });
        try {
          let res = await axios.get("https://headphone-zone-api.herokuapp.com/addtocart");
          let data = await res.data;
          dispatch({
            type: GET_CART_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: GET_CART_FALIURE
          });
        }
      };
      export const deleteitem = async (dispatch, id) => {
        console.log(id);
        let res = await axios.delete(`https://headphone-zone-api.herokuapp.com/addtocart/${id}`);
      
        dispatch({
          type: DELETE_FROM_CART,
          payload: id,
        });
        
      };