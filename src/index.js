import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import  { createStore } from "redux";
import {popularState} from "./redux/reducers";
import { Provider } from "react-redux";
const store = createStore(popularState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
