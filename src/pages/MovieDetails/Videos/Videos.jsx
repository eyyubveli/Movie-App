import React, { useEffect } from 'react'
import { RequestsForDetails } from '../../../constants/api';
import useMovieDetails from '../../../hooks/useMovieDetails';
import { useParams } from 'react-router-dom';
import "./Videos.scss";

const Videos = () => {
    const { id } = useParams();

    const { movie: video, loading, error } = useMovieDetails(
        RequestsForDetails(id).RequestVideosForTV,
        RequestsForDetails(id).RequestVideosForMovie,
        (data) => data.results
    );
    
    return (
        <section className='videos'>
            <div className="container">
                <h2>Videos</h2>
                <div className="videos-wrapper">
                    {video && video.map(vd => (
                        <div className="videos-item" key = {vd.key}>
                            <div className="iframe-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/${vd.key}`}
                                    title={vd.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading = "lazy"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Videos
