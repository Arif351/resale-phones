import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Context/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const { createUser, googleLogin, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignup = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully!')
                navigate('/')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.error(err))
            })
            .catch(error => {
                console.log(error.message);
                setSignUpError(error.message)
            })
    }

    const google = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        googleLogin(google)
            .then(result => {
                const user = result.user;
                toast.success('Signed up with gmail successfully!')
                navigate('/')
                console.log(user);
            })
            .catch(error => console.error(error));
    }



    return (
        <div className='h-[900px] flex justify-center items-center '>
            <div className='w-96 p-11 border-2 rounded-2xl  border-green-800 bg-stone-500'>
                <h1 className='text-center text-4xl font-semibold text-white pb-4'>Signup</h1>
                <hr />
                <form className='card-body ' onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        {errors.name && <p className='text-red-200 font-semibold'>{errors.name?.message}</p>}
                    </div>
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

                    </div>
                    <input type="Submit" className='text-white btn btn-active btn-info' />
                </form>
                <p>Already have an account? <Link to="/login" className='text-blue-300 font-semibold'>Login</Link> </p>
                <div className="divider w-full max-w-xs">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;