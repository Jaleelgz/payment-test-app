import { combineReducers, configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/testSlice";

const combineReducer = combineReducers({
  test: testReducer,
});

export const store = configureStore({
  reducer: combineReducer,
  devTools: __DEV__,
});
