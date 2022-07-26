import { configureStore } from "@reduxjs/toolkit";

import testReduser from "../features/Test/TestSlice";

export const store = configureStore({
  reducer: {
    test: testReduser,
  },
});
