import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// This creates the Redux store, the single source of truth for your app's state.
// The `reducer` field tells the store what "slices" of state it manages.
// We have one slice so far, called 'counter', managed by counterReducer.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
