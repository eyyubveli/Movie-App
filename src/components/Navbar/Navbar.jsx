import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import useLocalStorage from '../../hooks/useLocalStorage';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from '../ui/Modal';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const { setDataFromStorage, getDataFromStorage } = useLocalStorage();
    const [mode, setMode] = useState(getDataFromStorage());
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    const MobileMenu = () => {
        setActiveMenu(prev => !prev);
    }

    const changeMode = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

    }

    useEffect(() => {
        const currentMode = getDataFromStorage();
        if (currentMode) {
            setMode(currentMode);
            document.body.classList.add(currentMode);
        }

    }, [])

    useEffect(() => {
        setDataFromStorage(mode);
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(mode);
    }, [mode])


    useEffect(() => {
        setActiveMenu(false);
    }, [pathname])

    const handleOpen = () => setOpen(prev => !prev);

    return (
        <div className="container">
            <nav className="nav">
                <ul className='nav-menu'>
                    <div className="nav-left">
                        <li>
                            <Link to="/" className='nav-logo'>Movie App</Link>
                        </li>
                        <div className={`nav-left-both ${activeMenu ? "active" : ""}`}  >
                            <li>
                                <Link to="/favorites">Favorites</Link>
                            </li>
                            <li>
                                <Link to="/top-rated-movies">Top Rated Movies</Link>
                            </li>
                        </div>
                    </div>
                    <div className="nav-right">
                        <CiSearch size={20} cursor={"pointer"} onClick={handleOpen} />
                        {mode === 'dark' ? <MdDarkMode size={20} cursor={"pointer"} onClick={changeMode} /> : <MdOutlineDarkMode size={20} cursor={"pointer"} onClick={changeMode} />}

                        <CiMenuBurger size={20} className='nav-burger' cursor={"pointer"} onClick={MobileMenu} />
                    </div>
                </ul>
            </nav>
            <SearchModal open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar