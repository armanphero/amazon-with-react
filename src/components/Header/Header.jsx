import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { handleMenu } from '../../utilities/header';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" id='menu-icon'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            <div className='menu'>
                <a href="#">Shop</a>
                <a href="#">Orders</a>
                <a href="#">Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;