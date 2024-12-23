import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetchMovies from './useFetchMovies';

const useMovieDetails = (urlTv, urlMovie, keyExtractor = null) => {
    const { id } = useParams();
    const location = useLocation();
    const isTV = location.pathname.includes('tv-details');
    const url = isTV ? urlTv : urlMovie;

    const { data, loading, error } = useFetchMovies(url);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (data) {
            setMovie(keyExtractor ? keyExtractor(data) : data);
        }
    }, [data, keyExtractor]);

    return {
        id,
        location,
        movie,
        loading,
        error,
    };
};


export default useMovieDetails;