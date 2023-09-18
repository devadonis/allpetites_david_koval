import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, moviesReducer } from "./reducers/movieReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
  },
});

export default store;
