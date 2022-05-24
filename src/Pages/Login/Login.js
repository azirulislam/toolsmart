import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Background from '../../assets/icons/Background.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithgoogle] = useSignInWithGoogle(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }

    return (
        <div className='login-container'>
            <h2 className='login-title'>Please Login</h2>
            <div className='input-group'>
                <form> 
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="password" placeholder='password' />
                    <button className='form-submit' onClick={() => signInWithEmailAndPassword(email, password)}>
                        Sign In
                    </button>
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