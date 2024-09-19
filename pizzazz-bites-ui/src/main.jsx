import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "../utils/AuthContext";
import { CartProvider } from "../utils/CartContext";
import { RateProvider } from "../utils/RateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RateProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </RateProvider>
    </AuthProvider>
  </React.StrictMode>
);
