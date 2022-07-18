import { Outlet } from 'react-router-dom';

import { NavLink, NavContainer, LineA, LineB, LineC, LineD, LineE } from './navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faClapperboard, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <>
            <NavContainer>
                
                <NavLink to="/"><FontAwesomeIcon icon={faFilm} fontSize='28px' /> <br/>HOME</NavLink>
                <NavLink to="/movies"><FontAwesomeIcon icon={faClapperboard} fontSize='28px'/><br/>MOVIES</NavLink>
                <NavLink to="/movies/new"><FontAwesomeIcon icon={faUserSecret} fontSize='28px'/><br/>SEARCH</NavLink>
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
