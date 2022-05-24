import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
 
   const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate({ replace: true });
}

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  const onSubmit = data => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password)
  };

  return (
    <div>
      <div className='submit-form py-12 bg-primary'>
        <h2 className='text-xl text-primary'>Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register("example")} placeholder='Email' required />
          <input {...register("example")} placeholder='password' required />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("RequiredPassword", { required: true })} placeholder='Confirm-password' required />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className='btn ' type="submit" />
        </form>
      </div>
      
    </div>
  );
};

export default Register;