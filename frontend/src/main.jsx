import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthcontextProvide } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthcontextProvide>
        <App />
      </AuthcontextProvide>
    </BrowserRouter>
  </React.StrictMode>
);
