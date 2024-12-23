import React from 'react'
import { useSelector } from 'react-redux'
import MovieSliderContainer from '../../components/MovieSlider/MovieSliderContainer';
import "./Favorite.scss"

const FavoriteMovies = () => {
    const favorites = useSelector(state => state.favoriteMovies.favorites);
    return (
        <section className='favorite-movies'>
            <div className="container">
                <h2>{favorites.length > 0 ? "Your favorites" : " You don't have favorites 😞"}</h2>
                {favorites.length > 0 && <MovieSliderContainer data={favorites} type={"favorites"} />}
            </div>
        </section>
    )
}

export default FavoriteMovies