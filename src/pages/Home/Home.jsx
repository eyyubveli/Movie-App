import React from 'react'
import Trending from '../../components/trending/Trending'
import Upcoming from '../../components/Upcoming/Upcoming'
import TopRatedTvShows from '../../components/TopRated/TopRated'

const Home = () => {
    return (
        <>
            <Trending />
            <Upcoming />
            <TopRatedTvShows />
        </>
    )
}

export default Home