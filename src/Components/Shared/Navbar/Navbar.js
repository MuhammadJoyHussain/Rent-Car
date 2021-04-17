import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div style={{display: "flex"}} class="brand-title">
            <img style={{width: "80px"}} src={logo} alt=""/>
            <h1 style={{fontSize:"20px"}}>Rent A Car</h1>
        </div>
        <div class="navbar-links">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/dashboard/book">Dashboard</Link></li>
            <li><Link to="/admin/order">Admin</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link className="login" to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;