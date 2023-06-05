import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </Provider>
  
);
