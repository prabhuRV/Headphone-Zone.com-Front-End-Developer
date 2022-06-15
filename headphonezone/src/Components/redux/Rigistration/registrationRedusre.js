import { Reg_FAILURE, Reg_SUCCESS } from "../actionTypes";

const initial = {
  massage: "",
  error: "",
};

export const RegristionReducer = (state = initial, action) => {
//   console.log(action.payload);
//   console.log(state);
  switch (action.type) {
    case Reg_SUCCESS: {
      return {
        ...state,

        massage: action.payload,
      };
    }
    case Reg_FAILURE: {
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
