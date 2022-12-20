import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AddaProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        console.log(data);
        fetch('https://assignment-12-server-sigma-snowy.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // setEachPhones(null);
                    toast.success('Product added successfully')
                    navigate('/dashboard/myProducts');
                }
            })
        console.log(data);
    }

    return (
        <div className='w-10/12 flex justify-center items-center '>
            <div className='w-10/12 p-11 border-1 rounded-2xl'>
                <h1 className='text-center text-4xl font-semibold text-white pb-4'>Add Phone</h1>
                <hr />
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Phone Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Name" className="input input-bordered input-primary w-full" />
                        {errors.name && <p className='text-red-200 font-semibold'>{errors.name?.message}</p>}
                    </div>
                    {/* <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Phone's Brand</span>
                        </label>
                        <input type="text" {...register("brand", { required: "Brand name is required" })} placeholder="Brand Name" className="input input-bordered input-primary w-full " />
                        {errors.brand && <p className='text-red-200 font-semibold'>{errors.brand?.message}</p>}
                    </div> */}
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: "Price is required" })} placeholder="Price" className="input input-bordered input-primary w-full " />
                        {errors.price && <p className='text-red-200 font-semibold'>{errors.price?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Image</span>
                        </label>
                        <input type="link" {...register("img", { required: "Image link is required" })} placeholder="Image Link" className="input input-bordered input-primary w-full " />
                        {errors.img && <p className='text-red-200 font-semibold'>{errors.img?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Location</span>
                        </label>
                        <input type="text" {...register("location", { required: "Location address is required" })} placeholder="Location" className="input input-bordered input-primary w-full " />
                        {errors.loction && <p className='text-red-200 font-semibold'>{errors.loction?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Original Price</span>
                        </label>
                        <input type="number" {...register("original_price", { required: "Original Price is required" })} placeholder="Original Price" className="input input-bordered input-primary w-full " />
                        {errors.original_price && <p className='text-red-200 font-semibold'>{errors.original_price?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Used Time</span>
                        </label>
                        <input type="text" {...register("used_time", { required: "Used time is required" })} placeholder="Used Time" className="input input-bordered input-primary w-full " />
                        {errors.used_time && <p className='text-red-200 font-semibold'>{errors.used_time?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Date</span>
                        </label>
                        <input type="text" {...register("date", { required: "Posted Date is required" })} placeholder="dd/mm/year" className="input input-bordered input-primary w-full " />
                        {errors.date && <p className='text-red-200 font-semibold'>{errors.used_time?.message}</p>}
                    </div>



                    {/* <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer." } })} placeholder="password" className="input input-bordered input-primary w-full" />
                        {errors.password && <p className='text-red-200 font-semibold'>{errors.password?.message}</p>}
                    </div> */}
                    <div>
                        <h2 className='text-white font-medium mt-4'>What type of Brand?</h2>
                        <select {...register("brand")} required className="select w-full input-primary">
                            <option disabled selected>Phone's Brand </option>
                            <option>Apple</option>
                            <option>Realme</option>
                            <option>Samsung</option>
                        </select>
                    </div>
                    <input type="Submit" className='text-white btn btn-active btn-info  w-full my-4' />
                    {/* {signUpError && <p className='text-red-300 font-semibold'>{signUpError}</p>} */}
                </form>
                <div className="divider w-full">OR</div>
                <button className='btn btn-outline w-full'>Add Product</button>
            </div>
        </div>
    );
};

export default AddaProduct;