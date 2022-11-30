import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[900px] flex justify-center items-center '>
            <div className='w-96 p-11 border-2 border-green-700 bg-stone-500'>
                <h1 className='text-center text-4xl font-semibold text-white pb-4'>Login</h1>
                <hr />
                <form className='card-body ' onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                        {errors.email && <p className='text-red-200 font-semibold'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer." } })} placeholder="password" className="input input-bordered input-secondary w-full max-w-xs" />
                        {errors.password && <p className='text-red-200 font-semibold'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text text-white">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='text-white btn btn-active btn-info' />
                </form>
                <p>New to Cell Room? <Link to="/signup" className='text-blue-300 font-semibold'>Create new Account</Link> </p>
                <div className="divider w-full max-w-xs">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;