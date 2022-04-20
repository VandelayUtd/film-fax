import React from 'react';
import { NavLink } from './navbar.styles';


const Nav = () => {
    return (
        <div className='options'>
            <NavLink to="/">Welcome</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/movies/new">Movie Search</NavLink>
        </div>
    );
};

export default Nav;
