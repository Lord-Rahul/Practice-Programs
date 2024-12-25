// src/Footer.js
import React from 'react';
import './Footer.css'; // Importing the CSS file for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Baddi University. All rights reserved.</p>
            <p>Follow us on: 
                <a href="#"> Facebook</a> | 
                <a href="#"> Twitter</a> | 
                <a href="#"> Instagram</a>
            </p>
        </footer>
    );
};

export default Footer;
