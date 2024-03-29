import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Components/redux/store";
import { AuthContextProvider } from "./Components/context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
  <AuthContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
  </AuthContextProvider>
    </Provider>
);

reportWebVitals();
