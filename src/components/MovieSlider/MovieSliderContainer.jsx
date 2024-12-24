import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieSlider from './MovieSlider';
import { addMovieToFavorites } from '../../store/FavoriteMoviesSlice';
import { useLocation, useNavigate } from 'react-router-dom'
import { getMovieDetailsPath } from '../../utils/navigationUtils';
import MovieSkeleton from '../Skeleton/Skeleton';

const MovieSliderContainer = ({ data, type, loading }) => {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state) => state.favoriteMovies.favorites || []);
    const navigate = useNavigate();
    
    const checkIsFavorite = (movieId) => {
        return favoriteMovies.some((item) => item.id === movieId);
    };

    const addFavorite = (e, movie) => {
        e.stopPropagation();
        dispatch(addMovieToFavorites(movie));
    };

    const getMovieDetails = (movie) => {
        const path = getMovieDetailsPath(movie);
        navigate(path, { state: { movie } });

    };
    
    return (
        <MovieSlider
            data={data}
            type={type}
            onToggleFavorite={addFavorite}
            onMovieClick={getMovieDetails}
            checkIsFavorite={checkIsFavorite}
        />
    );
};

export default MovieSliderContainer;