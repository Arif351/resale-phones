import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAllProducts = () => {
    const { user } = useContext(AuthContext);

    const url = 'https://assignment-12-server-sigma-snowy.vercel.app/myProductList'

    const { data: AddedProductList = [] } = useQuery({
        queryKey: ['myProductList'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = res.json()
            console.log(data);
            return data;

        }

    });


    return (
        <div>
            <h2 className='text-3xl text-red-100 my-4'>My Order List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Phone Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AddedProductList.map((booking, i) =>
                                <tr key={booking._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.brand}</td>
                                    <td>{booking?.price}</td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
            <Link to="/dashboard/AddedProduct"><button className="btn btn-wide btn-outline btn-accent my-8">Add a Phone</button></Link>
        </div>
    );
};

export default MyAllProducts;