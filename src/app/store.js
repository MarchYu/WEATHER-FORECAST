import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import testReduser from "../features/Test/TestSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test: testReduser,
  },
});
