import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import PhoneCategory from './PhoneCategory';

const Phone = ({ phones }) => {
    const [eachPhones, setEachPhones] = useState(null);
    const { data } = phones;

    return (
        <section className='my-6'>
            <p className="text-4xl text-center text-sky-600 font-bold pb-8">Available Brands</p>
            <hr className='text-sky-700 pb-10' />
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    data.map(category =>
                        <PhoneCategory
                            key={category?._id}
                            category={category}
                            setEachPhones={setEachPhones}
                        ></PhoneCategory>
                    )
                }
            </div>
            {eachPhones &&
                <BookingModal
                    eachPhones={eachPhones}
                    setEachPhones={setEachPhones}
                ></BookingModal>}
        </section>
    );
};

export default Phone;