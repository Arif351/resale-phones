import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

export const DataContext = createContext();

const AllPhonesCategory = ({ category, children }) => {
    // const { unid, img, brand, price, name, location, resale_price, original_price, used_time, posted_date, seller_name } = category;
    const phone = category.data;

    <DataContext.Provider value={phone}>
        {children}
    </DataContext.Provider>

    console.log(phone);

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={phone.img} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">
                    Brand: {phone?.brand}
                    <div className="badge badge-warning rounded-md">Status: used</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/allPhones/`}><button className="btn btn-outline btn-primary rounded-xl">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllPhonesCategory;