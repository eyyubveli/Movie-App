export const getMovieDetailsPath = (movie) => {
    return movie.first_air_date 
        ? `/tv-details/${movie.id}` 
        : `/movie-details/${movie.id}`;
};