import React from 'react';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";



const PhoneCategory = ({ category }) => {
    const { unid, img, brand, name, location, resale_price, original_price, used_time, posted_date, seller_name } = category;

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Brand: {brand}
                    <div className="badge badge-warning rounded-md">status: used</div>
                </h2>
                <div className='text-2xl font-semibold'>
                    <p>{name}</p>
                </div>
                <div>
                    <h4>Seller Name: {seller_name}</h4>
                    <p>Resale Price: {resale_price}</p>
                    <p>Original Price: {original_price}</p>
                </div>
                <div>
                    <h1 className="font-thin">Used time: {used_time}</h1>
                    <h2>Post: {posted_date}</h2>
                </div>
                <div>
                    <p className='text-green-600 inline-flex gap-2'> <HiLocationMarker></HiLocationMarker> {location} </p>
                </div>
                <div className="card-actions justify-end">
                    <Link><button className="btn btn-outline btn-primary rounded-xl">Book Now</button></Link>
                </div>
            </div>
            <div className='hidden'>
            </div>
        </div>
    );
};

export default PhoneCategory;