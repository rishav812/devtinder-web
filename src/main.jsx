import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
