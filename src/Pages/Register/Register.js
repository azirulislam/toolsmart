import React, { useState } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {'Your email is invalid'}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

    return (
        <div>
            <div className='submit-form py-12 bg-primary'>
            <h2 className='text-xl text-primary'>Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Email", )} placeholder='Email' />
                <input type="password" placeholder='password' />
                <input type="password"  id="" placeholder='Confirm-Password' required />
                <button onClick={() => createUserWithEmailAndPassword(email, password)}>Register</button>
            </form>
            </div>
        </div>
    );
};

export default Register;