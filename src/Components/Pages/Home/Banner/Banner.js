import React, { useContext } from 'react';
import img from '../../../../Assets/Banner/pexels-gabriel-freytez-341523.jpg';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Banner = () => {
    const { Loading } = useContext(AuthContext)
    if (Loading) {
        return <Loading></Loading>
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="w-6/12 rounded-md shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your best Phone <br /> Collection</h1>
                    <p className="py-6 text-2xl">Explore and buy the best Smartphone in your <br /> <b className='text-3xl'>available budget!</b> </p>
                    <button className="btn btn-primary rounded-md text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;