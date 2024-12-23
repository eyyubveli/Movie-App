import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieItem from './MovieItem';
import './MovieSlider.scss';
import MovieSkeleton from '../Skeleton/Skeleton';

const MovieSlider = ({ data, type, onToggleFavorite, onMovieClick, checkIsFavorite }) => {


    const movies = type === 'top-rated-movies' ? data.results : data;
    
    
    return (
        <div className="movie-wrapper">

            <>
                {type === 'favorites' || type === 'top-rated-movies' ?
                    (
                        <div className="movie-list">
                            {movies && movies.length > 0 && movies.map((movie, index) => (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                    isFavorite={checkIsFavorite(movie.id)}
                                    onToggleFavorite={(e) => onToggleFavorite(e, movie)}
                                    onMovieClick={onMovieClick}
                                    index={index}
                                />
                            ))}
                        </div>
                    )
                    : (<Swiper
                        spaceBetween={17}
                        breakpoints={{
                            0: { slidesPerView: 2, spaceBetween: 17 },
                            768: { slidesPerView: 4, spaceBetween: 17 },
                            1024: { slidesPerView: 6, spaceBetween: 17 },
                        }}
                    >
                        {data && data.results.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieItem
                                    movie={movie}
                                    isFavorite={checkIsFavorite(movie.id)}
                                    onToggleFavorite={(e) => onToggleFavorite(e, movie)}
                                    onMovieClick={onMovieClick}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    )
                }
            </>
        </div >
    );
};

export default MovieSlider;
