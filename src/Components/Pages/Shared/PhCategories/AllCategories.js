import React from 'react';
import { Link } from 'react-router-dom';

const AllCategories = ({ category }) => {
    const { brand, img, _id } = category;

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Brand: {brand}
                    <div className="badge badge-warning rounded-md">status: used</div>
                </h2>
                <p>Hey! Here available your brands {brand} used phones in a minimum price.So Let's explore...</p>
                <div className="card-actions justify-end">
                    <Link to={`/allPhones/${_id}`}><button className="btn btn-outline btn-primary rounded-xl">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllCategories;