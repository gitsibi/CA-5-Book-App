/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Header = ({ searchTerm, onSearch, onRegisterClick, showSearch }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" className="logo" />
                <span className="logo-text">Books</span>
            </div>
            {showSearch && (
                <input type="text"
                       placeholder="Search Books"
                       value={searchTerm}
                       onChange={onSearch}
                       className="search-bar"
                />
            )}
            <button onClick={onRegisterClick} className="register-button">Register</button>
        </header>
    );
};

export default Header;
