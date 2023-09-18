import { createReducer } from "@reduxjs/toolkit";

const initialState: any = {};

export const moviesReducer = createReducer(initialState, {
    MoviesRequest: (state) => {
        state.loading = true;
    },
    MoviesSuccess: (state, action) => {
        state.loading = false;
        state.movies = action.payload;
    },
    MoviesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export const movieReducer = createReducer(initialState, {
    MovieRequest: (state) => {
        state.loading = true;
    },
    MovieSuccess: (state, action) => {
        state.loading = false;
        state.movie = action.payload;
    },
    MovieFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});
