



import { GET_EMPLOYEE_FALIURE, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, SINGLE_GET_EMPLOYEE_SUCCESS } from "./actionType";
const initial={

  employeeData:{
    isLoding:false,

    isError:false,
    data:[],
    single:[]
}
}
export const EmployeeReducer = (state=initial, action) => {
   

    switch (action.type) {
     
      case GET_EMPLOYEE_SUCCESS: {
        return {
            ...state,
            employeeData: {
              isLoading: false,
              isError: false,
              data: action.payload
            },
          };
      }
      
      case SINGLE_GET_EMPLOYEE_SUCCESS: {
        return {
            ...state,
            employeeData: {
              isLoading: false,
              isError: false,
              single: action.payload
            },
          };
      }
      case GET_EMPLOYEE_REQUEST: {
        return {
          ...state,
          employeeData: {
            isLoading: true,
            isError: false,
            data: [],
          },
        };
      }
      case GET_EMPLOYEE_FALIURE: {
        return {
          ...state,
          employeeData: {
            isLoading: false,
            isError: true,
            data: []
          },
        };
      }
      default: {
        return { ...state };
      }
    }
  };
  