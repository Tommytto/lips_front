// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getAppStore } from "./store";
import "./global.less";
import { App } from "./app";

const root = document.getElementById("root");

if (!root) {
  throw Error("Cannot find #root");
}

const store = getAppStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root
);
