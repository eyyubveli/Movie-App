import { useSelector } from 'react-redux';

export const useIsFavorite = (movie) => {
    const favorites = useSelector(state => state.favoriteMovies.favorites);
    return movie && favorites.some(fav => fav.id === movie.id);
};