import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER } from "../actionTypes";

export const postLogin = async ({ value, dispatch}) => {
 //  console.log(value)
  // console.log(dispatch);
 dispatch({
   type: LOGIN_USER,
 });
 return axios({
   url: "https://masai-api-mocker.herokuapp.com/auth/login",
   method: "post",
   data: {
    
     username:value.username,
     password:value.password,
     
   },
 })
 .then((res) => {
 // console.log(res.data);
  dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
})
.catch((err) => {
  console.log(err);
  dispatch({ type: LOGIN_FAILURE, payload: err.data.error });
});
};
