import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink, NavContainer, LineA, LineB, LineC, LineD, LineE } from './navbar.styles';


const Nav = () => {
    return (
        <>
            <NavContainer>
                <NavLink to="/">Welcome</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/movies/new">Movie Search</NavLink>
            </NavContainer>
            <LineA />
            <LineB />
            <LineC />
            <LineD />
            <LineE />
            <Outlet />
        </>
    );
};

export default Nav;
