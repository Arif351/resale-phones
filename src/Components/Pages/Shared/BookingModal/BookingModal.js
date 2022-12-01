import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ eachPhones, setEachPhones }) => {
    const { user } = useContext(AuthContext);
    const { name, original_price } = eachPhones;
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            phoneNumber,
            meetingLocation
        }
        setEachPhones(null);
        console.log(booking);
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
                        <input value={user?.name} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input value={user.email} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input value={name} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
                        <input value={original_price} type="text" className="input input-bordered rounded-xl input-primary w-full max-w-xs mb-5" disabled />
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