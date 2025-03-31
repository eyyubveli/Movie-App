import React, { useEffect } from 'react'
import { IMG_PATH_DESKTOP, Requests, RequestsForDetails } from '../../constants/Api';
import "./MovieDetails.scss";
import { useDispatch } from 'react-redux';
import { addMovieToFavorites } from '../../store/FavoriteMoviesSlice';
import { useIsFavorite } from '../../hooks/useIsFavorite';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useParams } from 'react-router-dom';
import { MovieDetailsContent } from './MovieDetailsContent';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { location, movie } = useMovieDetails(RequestsForDetails(id).RequestTV, RequestsForDetails(id).RequestMovie);
    const isFavorite = useIsFavorite(movie);
    const genreNames = movie?.genres?.map(genre => genre.name) || [];

    const handleToggleFavorite = () => {
        if (movie) {
            dispatch(addMovieToFavorites(movie));
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    return (
        <section className="movie-details">
            <MovieDetailsContent
                movie={movie}
                genreNames={genreNames}
                isFavorite={isFavorite}
                onToggleFavorite={handleToggleFavorite}
            />
        </section>
    )
}
export default MovieDetails
