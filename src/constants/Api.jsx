const API_KEY = import.meta.env.VITE_API_KEY;

export const IMG_PATH = "https://image.tmdb.org/t/p/w500/"
export const IMG_PATH_MOBILE = "https://image.tmdb.org/t/p/w342/"
export const IMG_PATH_DESKTOP = "https://image.tmdb.org/t/p/w1280";

const Requests = (type) => {
    const all = {
        requestTrending: `https://api.themoviedb.org/3/trending/movie/${type}?api_key=${API_KEY}`,
        requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
        requestTopRatedTvShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
    }
    return all
}

const RequestsForDetails = (id) => {

    const all = {
        RequestMovie: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
        RequestTV: `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`,
        RequestCastMovie: ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
        RequestCastTV: ` https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`,
        RequestVideosForMovie: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
        RequestVideosForTV: `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`,
        RequestMultiSearch: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${id}`,
        RequestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${id}&api_key=${API_KEY}`
    }
    return all
}

export { Requests, RequestsForDetails };