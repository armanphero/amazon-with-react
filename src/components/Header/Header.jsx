import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { handleMenu } from '../../utilities/header';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authprovider/Authprovider';

const Header = () => {
    const { user, signOutUser} = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" id='menu-icon'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            <div className='menu'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    !user &&
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </>
                }
                {
                    user &&
                    <div className='flex' style={{color:'#fff', gap: '20px'}}>
                        <p>{user.email}</p>
                        <button style={{ cursor: 'pointer' }} onClick={handleSignOut}>Logout</button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Header;