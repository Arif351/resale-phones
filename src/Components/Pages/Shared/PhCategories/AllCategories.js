import React from 'react';
import { Link } from 'react-router-dom';

const AllCategories = ({ category }) => {
    const { brand, img, data, _id } = category;
    console.log(category);
    // console.log(category);
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Brand: {brand}
                    <div className="badge badge-warning rounded-md">Status: used</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/allPhones/${_id}`}><button className="btn btn-outline btn-primary rounded-xl">See All</button></Link>
                </div>
            </div>
            <div className='hidden'>
            </div>
        </div>
    );
};

export default AllCategories;