import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import {createLogger} from "redux-logger";
import generateId from "./middlewares/generateId";

const logger = createLogger({
  collapsed: true,
});

const middleware = [...getDefaultMiddleware(), generateId, logger];
export default function () {
  return configureStore({reducer, middleware});
}
