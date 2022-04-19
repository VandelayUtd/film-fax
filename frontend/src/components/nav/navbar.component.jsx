import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = () => {
    return (
        <div className='options'>
            <Link className='option' to="/">Welcome</Link>
            <Link className='option' to="/movies">Movies</Link>
            <Link className='option' to="/movies/new">Movie Search</Link>
        </div>
    );
};

export default Nav;
