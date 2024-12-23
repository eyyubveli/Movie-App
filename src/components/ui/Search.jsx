import React, { useEffect, useState } from 'react'
import { IMG_PATH } from '../../constants/Api'
import { useLocation, useNavigate } from 'react-router-dom'

const Search = ({ data, setOpen, setSearch, search }) => {

    const navigate = useNavigate();
    const isTv = data?.results && data?.results[0]?.media_type === 'tv';

    return (
        <div className="search-container">
            <div className="search-results">
                {
                    data.results && data.results.length > 0 ? (
                        data.results.slice(0, 10).map((mv) => {
                            const title = mv.title || mv.
                                original_title || mv.original_name

                            const releaseDate = mv.release_date || mv.first_air_date
                            const imageUrl = mv.poster_path ? `${IMG_PATH}${mv.poster_path}` :
                                mv.profile_path ? `${IMG_PATH}${mv.profile_path}` :
                                    'https://via.placeholder.com/80x120?text=No+Image';

                            return (
                                <div key={mv.id} className="search-item" onClick={() => {
                                    navigate(`/${isTv ? 'tv-details' : 'movie-details'}/${mv.id}`)
                                    setOpen(false)
                                    setSearch('');
                                }}>
                                    <img
                                        height={70}
                                        src={imageUrl}
                                        alt={title || "Image not available"}
                                        title={title || "Title not available"}
                                    />
                                    <div>
                                        <p className="search-title">{title || "Title not available"}</p>
                                        <div className="align-content">
                                            <p>{releaseDate ? releaseDate.slice(0, 4) : "Date not available"}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) :
                        search &&  <p className="search-title">No results found</p>
                }
            </div>
        </div>

    )
}

export default Search