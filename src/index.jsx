// import { StrictMode } from "react"
import ReactDOM from "react-dom/client";
import App from "@/App";
import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/css/reset.less";
import "normalize.css";
import store from "./store";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  // 异步加载需要用 suspense 进行包裹
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
);
