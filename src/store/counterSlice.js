import { createSlice } from "@reduxjs/toolkit";

// The initial state of our "counter" slice.
// It's just a simple object with a `value` property.
const initialState = {
  value: 0,
};

// createSlice automatically generates action creators and action types
// that correspond to the reducers and state we define.
export const counterSlice = createSlice({
  name: "counter", // A name for this slice
  initialState, // The initial state defined above
  reducers: {
    // These are the "case reducers". Each one defines how the state
    // should be updated when a specific action is dispatched.
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes and produces a new immutable state based on those changes.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // This reducer takes an action with a payload (e.g., incrementByAmount(5))
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export the generated action creators for each reducer function.
// These are functions we will call to dispatch actions.
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
