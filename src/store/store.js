import { configureStore } from "@reduxjs/toolkit";
import favoriteMoviesReducer from "./FavoriteMoviesSlice"

export const store = configureStore({
    reducer: {
        favoriteMovies: favoriteMoviesReducer,
    },
});