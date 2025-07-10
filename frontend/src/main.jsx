import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        className: "",
        style: {
          border: "1px solid #4f46e5",
          padding: "12px",
          color: "#1f2937",
        },
      }}
    />
  </BrowserRouter>
);
