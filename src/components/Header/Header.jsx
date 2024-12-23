import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Header.scss";
import { Toaster } from 'react-hot-toast';


const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <Toaster position='top right' />
        </header>
    )
}

export default Header