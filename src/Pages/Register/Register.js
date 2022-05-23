import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Email", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="password" {...register( {  })} />
                <input type="password"  id="" placeholder='Password' required />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;