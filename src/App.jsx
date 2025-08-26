import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./store/counterSlice";
import "./App.css";

function App() {
  // The `useSelector` hook lets us extract data from the Redux store.
  // This function is called the "selector function".
  // It takes the entire store state as an argument and returns a piece of it.
  // Our state has a `counter` field (from store.js), which itself has a `value` field.
  const count = useSelector((state) => state.counter.value);

  // The `useDispatch` hook returns a reference to the `dispatch` function
  // from the Redux store. You use it to dispatch actions.
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Redux Counter Tutorial</h1>
      <div className="counter">
        {/* Display the current count from the Redux store */}
        <h2>{count}</h2>
        <div className="buttons">
          {/* Buttons call dispatch() with an action creator. */}
          {/* dispatch(increment()) "dispatches" the INCREMENT action to the store. */}
          {/* The store runs the counter reducer, which handles the action and updates the state. */}
          <button onClick={() => dispatch(increment())}>+1</button>
          <button onClick={() => dispatch(decrement())}>-1</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
      <p>
        This is the simplest possible Redux setup. Open your browser's DevTools
        to see the state update!
      </p>
    </div>
  );
}

export default App;
