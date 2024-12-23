import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import FavoriteMovies from './pages/Favorite/Favorite';
import Home from './pages/Home/Home';
import "./styles/main.scss";
import Details from './pages/MovieDetails';
import TopRatedMovies from './pages/TopRatedMovies/TopRatedMovies';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favorites' element={<FavoriteMovies />} />
                <Route path='/movie-details/:id' element={<Details />} />
                <Route path='/tv-details/:id' element={<Details />} />
                <Route path="/top-rated-movies" element={<TopRatedMovies />} />
            </Routes>
        </Router>
    );
}

export default App;