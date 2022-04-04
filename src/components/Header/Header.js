import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1 className='site-name'>Laptop World</h1>
            <div>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/reviews">Reviews</Link>
                <Link className='link' to="/dashboard">Dashboard</Link>
                <Link className='link' to="/blogs">Blogs</Link>
                <Link className='link' to="/about">About</Link>
            </div>
        </nav>

    );
};

export default Header;