import {GETDATA_FALIAURE, GETDATA_REQUEST, GETDATA_SUCCESS} from "./actionTypes"
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

export const getData=(payload)=>
{
    console.log(payload)
    return (dispatch)=>
    {
        dispatch(getDataRequest())

       return axios({
            url: "http://localhost:8080/Earphone",
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