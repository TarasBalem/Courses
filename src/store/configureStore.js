import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import {createLogger} from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

const middleware = [...getDefaultMiddleware(), logger];

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return configureStore({reducer, middleware});
}
