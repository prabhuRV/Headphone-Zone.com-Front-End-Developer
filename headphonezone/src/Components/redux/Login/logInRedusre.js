import { LOGIN_FAILURE, LOGIN_SUCCESS,  } from "../actionTypes";

const initial = {
  token:"",
  error: "",
};

export const loginReducer = (state = initial, action) => {
//   console.log(action.payload);
//   console.log(state);
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,

        token: action.payload,
      };
    }
    case LOGIN_FAILURE: {
        return {
          ...state,
  
          error: action.payload,
        };
      }
    default: {
      return { ...state };
    }
  }
};
