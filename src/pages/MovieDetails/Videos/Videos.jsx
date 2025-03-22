import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import "./Videos.scss";

const Videos = () => {
    const { id } = useParams();
    const location = useLocation();
    const isMovieDetails = location.pathname.startsWith("/movie-details");
    const url = `https://player.videasy.net/${isMovieDetails ? 'movie' : 'tv'}`;

    return (
        <section className='videos'>
            <div className="container">
                <h2>Videos</h2>
                <div className="videos-wrapper">
                    <iframe
                        src={`${url}/${id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Videos