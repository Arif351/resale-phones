import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='h-[600px] flex justify-center items-center '>
            <div className='w-96 p-11 border-2 border-green-700 bg-stone-500'>
                <h1 className='text-center text-4xl font-semibold text-white pb-4'>Login</h1>
                <hr />
                <form className='card-body ' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" {...register("firstName")} placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="password" className="input input-bordered input-secondary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text text-white">Forget Password?</span>
                        </label>
                    </div>
                    <p>{data}</p>
                    <input type="submit" className='text-white' />
                </form>
            </div>
        </div>
    );
};

export default Login;