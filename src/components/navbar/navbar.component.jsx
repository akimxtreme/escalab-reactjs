import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

const NavBar = () => (
    <div className="navbar">
        <Link className="option" to="/">Home</Link>
        <Link className="option" to="/episodes">Episodes</Link>
    </div>
);
export default NavBar;