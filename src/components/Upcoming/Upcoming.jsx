import React, { useEffect } from 'react'
import useFetchMovies from '../../hooks/useFetchMovies'
import "./Upcoming.scss";
import MovieSliderContainer from '../MovieSlider/MovieSliderContainer';
import { Requests } from '../../constants/Api';
import MovieSkeleton from '../Skeleton/Skeleton';

const Upcoming = () => {
    const { data, loading, error } = useFetchMovies(Requests().requestUpcoming);

    return (
        <section className='upcoming'>
        <div className="container">
            <h1 className='upcoming-title'>Upcoming</h1>
            {loading ? (
                <MovieSkeleton />
            ) : !error && data ? (
                <MovieSliderContainer data={data} loading={loading} />
            ) : (
                <p>Error loading data...</p>
            )}
        </div>
    </section>
    
    )
}

export default Upcoming