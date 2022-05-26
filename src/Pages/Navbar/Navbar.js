import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div className='Navbar'>
        <Link to="/">HOME</Link>
        <Link to="/purchase">PURCHASE</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/myProfile">MY-PROFILE</Link>
        <Link to="/login">LOGIN</Link>
        
            {
                user && <Link to="/dashboard">DASHBOARD</Link>
            }
        {
                    user ?
                    <button className='out-btn' onClick={handleSignOut}>SIGN OUT</button>
                    :
                    <Link to="/Login">LOGIN</Link>}
    </div>

    );
};

export default Navbar;