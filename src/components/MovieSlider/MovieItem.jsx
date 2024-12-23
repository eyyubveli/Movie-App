import React from 'react';
import { FaStar } from 'react-icons/fa';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FavoriteIcon from './FavoriteIcon';
import LazyLoadImg from './LazyLoadImg';

import { motion } from 'framer-motion';
const MovieItem = ({ movie, isFavorite, onToggleFavorite, onMovieClick, index }) => {

    return (
        <motion.div
            className="movie-item"
            key={movie.id}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onMovieClick(movie)}>
            <div className="picture-container">
                <LazyLoadImg movie={movie} />
                <FavoriteIcon isFavorite={isFavorite} onToggle={onToggleFavorite} />
            </div>
            <h3>{movie.original_title || movie.original_name}</h3>
            <div className="movie-bottom">
                <p>{movie?.release_date?.slice(0, 4) || movie.first_air_date.slice(0, 4)}</p>
                <div className="movie-bottom-right">
                    <FaStar color="#ca8a04" />
                    <span>{Number(movie.vote_average).toFixed(1)}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default MovieItem;