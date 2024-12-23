import { createSlice } from '@reduxjs/toolkit';
import useMoviesStorage from '../hooks/useMovieStorage';
const { setMoviesToStorage, getMoviesFromStorage } = useMoviesStorage();

import toast from 'react-hot-toast';

const initialState = {
    favorites: getMoviesFromStorage() || []
};

export const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState,
    reducers: {
        addMovieToFavorites: (state, action) => {
            const movie = action.payload;
            const existingMovie = state.favorites.some(item => item.id === movie.id);
            const message = existingMovie ? "Removing from favorites! 😔" : "Adding from favorites! 😊";
            toast.success(message);
            if (existingMovie) {
                state.favorites = state.favorites.filter(item => item.id !== movie.id);

            } else {
                state.favorites.push({ ...movie, isFavorite: true });
            }
            setMoviesToStorage(state.favorites)
        },
    },
});

export const { addMovieToFavorites } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;