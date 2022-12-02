import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Realme from './Realme';

const RealmeCardLoader = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['allPhones'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-sigma-snowy.vercel.app/realme')
            const data = await res.json();
            console.log(data);
            return data;
        }

    });
    return (
        <section className='my-6'>
            <p className="text-4xl text-center text-sky-600 font-bold pb-8">Available Brands</p>
            <hr className='text-sky-700 pb-10' />
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    categories.map(category =>
                        <Realme
                            key={category._id}
                            category={category}
                        ></Realme>

                    )
                }
            </div>

        </section>
    );
};

export default RealmeCardLoader;