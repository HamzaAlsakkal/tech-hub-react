import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Tech Hub Logo" className="logo-img" />
        </div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/what-i-learned">What I Learned</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
