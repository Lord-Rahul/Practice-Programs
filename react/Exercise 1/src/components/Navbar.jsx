// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Importing the CSS file for the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src="/src/assets/Logo-New-2.png" alt="" /></div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Academics</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
