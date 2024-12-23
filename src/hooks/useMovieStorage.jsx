const useMoviesStorage = () => {

    const setMoviesToStorage = (movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }

    const getMoviesFromStorage = () => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        return movies;
    }

    return {
        setMoviesToStorage,
        getMoviesFromStorage
    }

}

export default useMoviesStorage;