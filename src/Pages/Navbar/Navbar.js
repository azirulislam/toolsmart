import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='Navbar'>
        <Link to="/">HOME</Link>
        <Link to="/purchase">PURCHASE</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/myProfile">MY-PROFILE</Link>
        <Link to="/login">LOGIN</Link>
      
        
    </div>

    );
};

export default Navbar;