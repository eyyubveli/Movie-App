import React, { useEffect, useState } from 'react';
import useFetchMovies from '../../hooks/useFetchMovies';
import MovieSliderContainer from '../MovieSlider/MovieSliderContainer';
import "./Trending.scss"
import { Requests } from '../../constants/Api';
import MovieSkeleton from '../Skeleton/Skeleton';

const Trending = () => {
    const [timeWindow, setTimeWindow] = useState('day');
    const { data, loading, error } = useFetchMovies(Requests(timeWindow).requestTrending);

    return (
        <section className='trending'>
            <div className="container">
                <div className="trending-top">
                    <h1 className="trending-title">Trending</h1>
                    <div className="trending-btns">
                        <button type='button' onClick={() => setTimeWindow('day')} className={timeWindow === 'day' ? 'active' : ''}>Today</button>
                        <button className={timeWindow === 'week' ? 'active' : ''} type='button' onClick={() => setTimeWindow('week')} >This Week</button>
                    </div>
                </div>
                <div className="trending-movies">
                    {loading ? (
                        <MovieSkeleton />
                    ) : !error && data ? (
                        <MovieSliderContainer data={data} loading={loading}/>
                    ) : (
                        <p>Error loading data...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Trending