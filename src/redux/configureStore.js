import {  combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import User from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  router : connectRouter(history)
});
const middlewares = [thunk.withExtraArgument({history:history})];

const env = process.env.NODE_ENV;

if(env === "development") {
  const {logger} = require("redux-logger");
  middlewares.push(logger);
}

let store = (initialStore) => configureStore({reducer:rootReducer, middleware: middlewares,  devTools: process.env.NODE_ENV !== 'production',});

export default store();