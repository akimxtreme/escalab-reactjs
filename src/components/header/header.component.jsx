import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../assets/logo.png';
import './header.styles.scss';
import NavBar from '../navbar/navbar.component';
// const Header = () => }{}
const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src={logo} alt="xmen logo" title="Home" />
        </Link>
        <NavBar/>
    </div>
);
export default Header;