import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Phone from './Phone';


const AllPhones = () => {
    const param = useParams()

    const { data: phone = [] } = useQuery({
        queryKey: ['allPhones'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-sigma-snowy.vercel.app/allPhones/${param.id}`)
            const data = await res.json();
            return data;
        }
    });

    return (
        <section className='my-6'>
            <div className=''>
                {
                    phone.map(phones =>
                        <Phone
                            key={phones._id}
                            phones={phones}
                        ></Phone>
                    )
                }
            </div>
        </section>
    );
};

export default AllPhones;