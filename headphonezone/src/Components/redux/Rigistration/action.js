import axios from "axios";
import { REGISTER_USER, Reg_FAILURE, Reg_SUCCESS } from "../actionTypes";
export const postRegister = async ({ value, dispatch }) => {
  dispatch({
    type: REGISTER_USER,
  });
  return axios({
    url: "https://masai-api-mocker.herokuapp.com/auth/register",
    method: "post",
    data: {
      name: value.name,
      email: value.email,
      username: value.username,
      password: value.password,
      mobile: value.mobile,
      description: value.description,
    },
  })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: Reg_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: Reg_FAILURE, payload: err.data.error });
    });
};
