import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    const url = 'http://localhost:5000/buyers';

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/buyers/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin successfully.')
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl text-red-100 my-4'>All Buyers List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            {/* <th>Meeting Location</th>
                            <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{
                                        buyer?.role !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(buyer._id)} className="btn btn-sm btn-outline btn-accent">Make Admin</button>}
                                    </td>
                                    <td><button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>

                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
            <Link to="/"><button className="btn btn-wide btn-outline btn-accent my-8">Go to Mobile Collection</button></Link>
        </div>
    );
};

export default MyBuyers;