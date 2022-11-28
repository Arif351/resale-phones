import { useQuery } from '@tanstack/react-query';
import React, { createContext, useEffect, useState } from 'react';
import AllCategories from './AllCategories';

export const DataContext = createContext();

const PhCategories = () => {
    // const [categories, setCategories] = useState([]);

    const { data: categories = [] } = useQuery({
        queryKey: ['allPhones'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allPhones')
            const data = await res.json();
            console.log(data);
            return data;
        }

    });

    // useEffect(() => {
    //     fetch('http://localhost:5000/allPhones')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategories(data);
    //         })
    // }, [])

    return (
        <section className='my-6'>
            <p className="text-4xl text-center text-sky-600 font-bold pb-8">Available Brands</p>
            <hr className='text-sky-700 pb-10' />
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    categories.map(category =>
                        <DataContext.Provider value={category}>
                            <AllCategories
                                key={category._id}
                                category={category}
                            ></AllCategories>

                        </DataContext.Provider>
                    )
                }
            </div>

        </section>
    );
};

export default PhCategories;