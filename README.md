# Redux Counter

## The Project

A simple counter application built with React and Vite, designed to demonstrate the fundamental concepts of state management using Redux Toolkit.

## What is Redux?

React Redux can simplify our web app by making our state becoming a global state. What does that mean? It means that we don't have to use `useState` again in another component just to declare a similar state, because we have already set it as a global state.

For example in this project, if we want to use the count value (the state) on our Navbar, we don't have to re-declare the `useState` again but simply just call or use the `useSelector` and `useDispacth`, then call the count value.

## How the Program Works?

1. First, we set the `initialState` and the `reducers`, functions that specify how the state should be updated, using `createSlice` function.
2. Then, we import the `reducer` functions from `counterSlice.js` to manage a piece of state called counter, and use this `counterReducer` function to handle any updates to it, using `configureStore`.
3. Next, we import the `store.js` in our `main.jsx` so that our `<App />` can simply use the state management we have defined as the global state using `<Provider>` component.
4. Last, we can simply use the state and actions by importing our `counterSlice.js` in our `App.jsx` using:
   - `useSelector` hook to read data from the store, and
   - `useDispatch` hook to dispatch the actions.
