import { IMG_PATH } from '../../constants/Api';
import { formatYear } from '../../utils/dateUtils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MovieBackdrop } from './MovieBackdrop';
import { MovieGenres } from './MovieGenres';

export const MovieDetailsContent = ({ movie, genreNames, isFavorite, onToggleFavorite }) => (

    <>
        <MovieBackdrop movie={movie} />
        <div className="container movie-details-content">
            <LazyLoadImage
                height={350}
                src={IMG_PATH + movie?.poster_path}
                alt={movie?.original_title}
                title={movie?.original_title}
                loading='lazy'
                effect="blur"
                className='main-poster'
            />
            <div className="movie-details-right">
                <h1>{movie?.original_title || movie?.original_name}</h1>
                <p> {formatYear(movie?.release_date) || formatYear(movie?.first_air_date)} {""}
                    ● <span>{movie?.original_language}</span> {""}
                    {movie?.first_air_date &&
                        <>
                            ● <span>{movie?.number_of_seasons + " Seasons"}</span> {""}
                            ● <span>{movie?.number_of_episodes + " Episodes"}</span>
                        </>
                    }
                </p>
                <MovieGenres genres={genreNames} />
                <p>{movie?.overview}</p>
                <button
                    type="button"
                    className="remove"
                    onClick={onToggleFavorite}
                >
                    {isFavorite ? "Removing Favorite" : "Adding Favorite"}
                </button>
            </div>
        </div>
        <div className="gradient-overlay"></div>
    </>
);