// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../Context/AuthProvider';
// import useToken from '../../Hooks/useToken';

// const Signup = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { createUser, updateUser } = useContext(AuthContext);
//     const [signUpError, setSignUpError] = useState('');
//     const [createdUserEmail, setCreatedUserEmail] = useState('');
//     const [token] = useToken(createdUserEmail);
//     const navigate = useNavigate();
//     console.log(token);
//     if (token) {
//         navigate('/')
//     }

//     const handleSignup = data => {
//         setSignUpError('')
//         createUser(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 toast.success('User created successfully!')
//                 const userInfo = {
//                     displayName: data.name,
//                 }
//                 updateUser(userInfo)
//                     .then(() => {
//                         saveBuyer(data.name, data.email);
//                     })
//                     .catch(err => console.error(err));
//             })
//             .catch(error => {
//                 console.error(error)
//                 setSignUpError(error.message)
//             });
//     }
//     const saveBuyer = (name, email) => {
//         const Buyer = { name, email };
//         fetch('http://localhost:5000/buyerList', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(Buyer)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setCreatedUserEmail(email);
//             })
//     }



//     return (
//         <div className='h-[800px] flex justify-center items-center'>
//             <div className='w-96'>
//                 <h2 className='text-4xl text-center font-bold'>Sign Up</h2>
//                 <form onSubmit={handleSubmit(handleSignup)}>
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Name</span>
//                         </label>
//                         <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
//                         {errors.name && <p className='text-red-600 font-semibold'>{errors.name.message}</p>}
//                     </div>
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Email</span>
//                         </label>
//                         <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
//                         {errors.email && <p className='text-red-600 font-semibold'>{errors.email.message}</p>}
//                     </div>
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Password</span>
//                         </label>
//                         <input type="password"
//                             {...register("password", {
//                                 required: "Password is required",
//                                 minLength: { value: 6, message: "Password must be 6 characters long." },
//                                 pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have special character, uppercase, lowercase and number." }
//                             })}
//                             className="input input-bordered w-full max-w-xs" />
//                         {errors.password && <p className='text-red-600 font-semibold'>{errors.password.message}</p>}
//                     </div>
//                     <input className='btn btn-accent my-4 w-full max-w-xs' value='Sign  Up' type="submit" />
//                     {signUpError && <p className='text-red-600 font-semibold'>{signUpError}</p>}
//                 </form>
//                 <p>Already have an Account?<Link to="/login" className='text-blue-400 font-semibold'> Please, Login</Link> </p>
//                 <div className="divider w-full max-w-xs">OR</div>
//                 <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
//             </div>
//         </div>
//     );
// };

// export default Signup;