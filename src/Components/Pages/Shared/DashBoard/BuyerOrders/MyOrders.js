import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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

    return (
        <div>
            <h2 className='text-3xl text-red-100 my-4'>My Order List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Ordered Phone Name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                            <th>Meeting Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.phoneName}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.phoneNumber}</td>
                                    <td>{booking.meetingLocation}</td>
                                    <td><Link to='/allPhones'><button className='btn btn-info rounded-xl'>Pay</button></Link></td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
            <Link to="/"><button className="btn btn-wide btn-outline btn-accent my-8">Go to Mobile Collection</button></Link>
        </div>
    );
};

export default MyOrders;