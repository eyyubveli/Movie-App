import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Videos.scss";
import useMovieDetails from "../../../hooks/useMovieDetails";
import { RequestsForDetails } from "../../../constants/api";

const Videos = () => {
    const { id } = useParams();
    const location = useLocation();
    const isMovieDetails = location.pathname.startsWith("/movie-details");
    const url = `https://player.videasy.net/${isMovieDetails ? 'movie' : 'tv'}`;

    const { movie } = useMovieDetails(RequestsForDetails(id).RequestTV, RequestsForDetails(id).RequestMovie);

    const [selectedSeason, setSelectedSeason] = useState(1);
    const [selectedEpisode, setSelectedEpisode] = useState(1);
    const [episodeCount, setEpisodeCount] = useState(0);

    const isTVShow = !isMovieDetails;

    useEffect(() => {
        if (isTVShow && movie?.seasons?.length > 0) {
            const firstSeason = movie.seasons.find(season => season.episode_count > 0);
            if (firstSeason) {
                setSelectedSeason(firstSeason.season_number);
                setEpisodeCount(firstSeason.episode_count);
                setSelectedEpisode(1);
            }
        }
    }, [movie, isTVShow]);

    const handleSeasonChange = (e) => {
        const seasonNumber = parseInt(e.target.value);
        const season = movie.seasons.find(s => s.season_number === seasonNumber);
        if (season) {
            setSelectedSeason(seasonNumber);
            setEpisodeCount(season.episode_count);
            setSelectedEpisode(1);
        }
    };

    return (
        <section className="videos">
            <div className="container">
                <h2>Videos</h2>
                <div className="videos-wrapper">
                    
                    {isTVShow && (
                        <>
                            <select value={selectedSeason} onChange={handleSeasonChange}>
                                {movie?.seasons?.map((season) => (
                                    season.episode_count > 0 && (
                                        <option key={season.id} value={season.season_number}>
                                            {season.name}
                                        </option>
                                    )
                                ))}
                            </select>

                            <select value={selectedEpisode} onChange={(e) => setSelectedEpisode(parseInt(e.target.value))}>
                                {[...Array(episodeCount)].map((_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                        {index + 1}. Episode
                                    </option>
                                ))}
                            </select>
                        </>
                    )}

                    <iframe
                        src={`${url}/${id}${isTVShow ? `/${selectedSeason}/${selectedEpisode}` : ""}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Videos;
