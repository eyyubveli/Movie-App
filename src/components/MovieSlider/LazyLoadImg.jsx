import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMG_PATH, IMG_PATH_MOBILE } from '../../constants/Api';


const LazyLoadImg = ({ movie }) => {

    return (
        <picture>
            <source
                media="(max-width: 768px)"
                srcSet={`${IMG_PATH_MOBILE + movie.poster_path} 342w`}
            />
            <source
                media="(min-width: 769px)"
                srcSet={`${IMG_PATH + movie.poster_path} 500w`}
            />
            <LazyLoadImage
                src={IMG_PATH_MOBILE + movie.poster_path}
                alt={movie.original_title}
                title={movie.original_title}
                effect="blur"
                loading="lazy"
            />
        </picture>
    );
};

export default LazyLoadImg;
