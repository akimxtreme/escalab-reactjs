import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

const NavBar = () => (
    <div className="navbar">
        <Link className="option" to="/">Home</Link>
        <Link className="option option-last" to="/evil-group">Evil Group</Link>
        <Link className="option option-last" to="/x-men">X-men</Link>
        <Link className="option option-last" to="/episodes">Episodes</Link>
    </div>
);
export default NavBar;