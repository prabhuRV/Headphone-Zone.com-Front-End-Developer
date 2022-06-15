
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [tokens, setToken] = useState("");
  const login = useSelector((state) => state.login);
//   const login = useSelector((state) => state.login);
 let tokk=login?.token

  useEffect(()=>
  {
    setToken(tokk)
  },[tokk])
 
   
      
  

  return <AuthContext.Provider value={{tokens}} >{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
