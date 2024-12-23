import React from 'react'
import useFetchMovies from '../../hooks/useFetchMovies'
import MovieSliderContainer from '../MovieSlider/MovieSliderContainer';
import { Requests } from '../../constants/Api';
import MovieSkeleton from '../Skeleton/Skeleton';


const TopRatedTvShows = () => {
    const { data, loading, error } = useFetchMovies(Requests().requestTopRatedTvShows);
    return (
        <section className="top-rated">
            <div className="container">
                <h1 className='top-rated-title'>Top Rated TV Shows</h1>
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

export default TopRatedTvShows