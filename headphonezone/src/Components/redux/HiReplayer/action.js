import {GETDATA_FALIAURE, GETDATA_REQUEST, GETDATA_SUCCESS, SINGLE_GET_PRODUCT_FALIURE, SINGLE_GET_PRODUCT_REQUEST, SINGLE_GET_PRODUCT_SUCCESS} from "../actionTypes"
import axios from "axios";
const getDataRequest=(payload)=>
{
    return {
        type:GETDATA_REQUEST,
        payload
    }
}
const getDataSuccess=(payload)=>
{
    return {
        type:GETDATA_SUCCESS,
        payload
    }
}
const getDataFalieaure=(payload)=>
{
    return {
        type:GETDATA_FALIAURE,
        payload
    }
}

export const HiRelgetData=(payload)=>
{
    console.log(payload)
    return (dispatch)=>
    {
        dispatch(getDataRequest())

       return axios({
            url: "http://localhost:8080/HiRelPlayer",
            method: "get",
            params:
            {
                ...payload
            }
        })
            .then((res) => {
              // console.log(res.data);
              dispatch(getDataSuccess(res.data));
            })
            .catch((err) => {
              console.log(err);
              dispatch(getDataFalieaure(err.data));
            });
    }
}
export const singleEmployee = async (dispatch, id) => {
  let name=localStorage.getItem('name');

    dispatch({
      type: SINGLE_GET_PRODUCT_REQUEST,
    });
    try {
      let res = await axios.get(`http://localhost:8080/${name}/${id}`);
      let data = await res.data;
      console.log(data);
      dispatch({
        type: SINGLE_GET_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_GET_PRODUCT_FALIURE,
      });
    }
  };