import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_PATH, RequestsForDetails } from '../../../constants/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import useMovieDetails from '../../../hooks/useMovieDetails';
import "./Casts.scss";

const Casts = () => {
    const { id } = useParams();

    const { movie: cast, loading, error } = useMovieDetails(
        RequestsForDetails(id).RequestCastTV,
        RequestsForDetails(id).RequestCastMovie,
        (data) => data.cast
    );


    return (
        <section className="cast">
            <div className="container">
                <h2 className="cast-title">Full Cast</h2>
                <div className="cast-wrapper">
                    {cast?.length > 0 &&
                        cast.map((actor) => (
                            <div className="cast-item" key={actor.id}>
                                <LazyLoadImage
                                 src={IMG_PATH + actor?.profile_path} alt={actor.name}
                                 loading='lazy'
                                 effect='blur'
                                 />
                                <h4>{actor?.name}</h4>
                                <span>{actor.
                                    character
                                }</span>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Casts;