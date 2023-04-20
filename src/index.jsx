// import { StrictMode } from "react"
import ReactDOM from "react-dom/client";
import App from "@/App";
import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/css/reset.less";
import "normalize.css";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  // 异步加载需要用 suspense 进行包裹
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
