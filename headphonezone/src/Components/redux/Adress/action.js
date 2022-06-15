import axios from "axios";
import { ADD_ADDRESS_FAILURE, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, GET_ADDRESS_FALIURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS } from "../actionTypes";

export const addAdress = async ({ value, dispatch}) => {
console.log(value)
   dispatch({
     type: ADD_ADDRESS_REQUEST,
   });
   return axios({
     url: "http://localhost:8080/Address",
     method: "post",
     data: {
      
    value
       
     },
   })
     .then((res) => {
        console.log(res.data);
       dispatch({ type: ADD_ADDRESS_SUCCESS, });
     })
     .catch((err) => {
       console.log(err);
       dispatch({ type: ADD_ADDRESS_FAILURE });
     });
 };
 export const getAdress = async (dispatch) => {
  dispatch({
    type: GET_ADDRESS_REQUEST
  });
  try {
    let res = await axios.get("http://localhost:8080/Address");
    let data = await res.data;
    dispatch({
      type: GET_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ADDRESS_FALIURE
    });
  }
};
