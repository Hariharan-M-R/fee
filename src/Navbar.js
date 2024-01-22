import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import logo from './Images/logo4.jpeg'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to='/HomePage'>Home</Link></li>
          <li><Link to='/Login'>Student Login</Link></li>
          <li><Link to='/Adminlogin'>Admin Login</Link></li>
          <li><Link to='/Contactus'>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

