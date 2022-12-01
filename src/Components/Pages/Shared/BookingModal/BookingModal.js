import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ eachPhones, setEachPhones }) => {
    const { user } = useContext(AuthContext);
    const { name, original_price } = eachPhones;
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneName = form.phoneName.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;

        const bookings = {
            name,
            email,
            phoneName,
            price,
            phoneNumber,
            meetingLocation
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setEachPhones(null);
                    toast.success(`Thanks. ${name} phone bookIing confirmed.`)
                }
            })
        console.log(bookings);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal text-center">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-2">{name}</h3>
                    <hr className='w-2/3 mx-auto' />
                    <form className='my-5' onSubmit={handleBooking}>
                        <input name='name' defaultValue={user?.displayName} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input name='email' defaultValue={user?.email} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input name='phoneName' defaultValue={name} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input name='price' value={original_price} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input name='phoneNumber' type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" placeholder='Your Phone Number' />
                        <input name='meetingLocation' type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" placeholder='Meeting Location' /> <br />
                        <input className='btn btn-outline btn-success rounded-xl w-full max-w-xs' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;