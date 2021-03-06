import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./App.jsx";
import ReduxThunk from "redux-thunk";
import "./index.css";

function getMiddleware() {
  const middleware = [ReduxThunk];
  return middleware;
}

const store = createStore(rootReducer, applyMiddleware(...getMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
