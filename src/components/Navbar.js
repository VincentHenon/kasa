import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/" exact>
                Accueil
            </NavLink>
            <NavLink
                to="/about">
                À propos
            </NavLink>
        </nav>
    );
}

export default Navbar;



