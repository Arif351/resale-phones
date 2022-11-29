import React from 'react';
import { Link } from 'react-router-dom';

const Apple = ({ category }) => {
    const { img, name } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Brand: {name}
                    <div className="badge badge-warning rounded-md">Status: used</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link ><button className="btn btn-outline btn-primary rounded-xl">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Apple;