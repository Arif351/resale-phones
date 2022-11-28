import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { DataContext } from './AllPhonesCategory';


const AllPhones = () => {

    // const { unid, img, brand, price, name, location, resale_price, original_price, used_time, posted_date, seller_name } = category;



    // const { unid, img, brand, price, name, location, resale_price, original_price, used_time, posted_date, seller_name } = category;


    return (
        <section className='my-6'>
            <p className="text-4xl text-center text-sky-600 font-bold pb-8">Your favourite Brand</p>
            <hr className='text-sky-700 pb-10' />
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div className="card w-96 bg-base-100 shadow-xl rounded-md">
                    <figure><img alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">
                            Brand:
                            <div className="badge badge-warning rounded-md">status: used</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            {/* <Link to={`/allPhones/`}><button className="btn btn-outline btn-primary rounded-xl">See All</button></Link> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AllPhones;