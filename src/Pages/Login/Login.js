import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Background from '../../assets/icons/Background.png';

const Login = () => {
    const [signInWithgoogle ] = useSignInWithGoogle(auth);
    return (
        <div className='login-container'>
            <h2 className='login-title'>Please Login</h2>
            <div className='input-group'>
                <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Email' required />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='password' />
                <input className='form-submit' type="submit" value="Login" required />
                </form>
            </div>
            <p className='p-area'>
                    New to here : <Link className='text-xl text-primary' to='/Register'>Create an account</Link>
                </p>
            <button className='btn' onClick={() => signInWithgoogle()}> <img src={Background} alt="img" /> Signin with google</button>
            
        </div>
    );
};

export default Login;