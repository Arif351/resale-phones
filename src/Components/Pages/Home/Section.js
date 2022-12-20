import React from 'react'
import about2 from '../../../Assets/about/Apple-iPhone-13-Red-Price-in-Bangladesh.jpg'

const Section = () => {
    return (
        <div className='mt-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={about2} className="w-5/12 rounded-lg shadow-2xl" alt='' />
                    <div className='ml-7'>
                        <h1 className="text-3xl font-bold text-sky-500">About Cell Room old phone's Valuation </h1>
                        <p className="py-6">Cell Room is the combination of first ever e-commerce and re-commerce marketplace in Bangladesh where customers can purchase anything by personalized orders as well as sell their unneeded/surplus products such as smartphones, laptops, appliances, vehicles, etc. and exchange also.  <br />  <br />

                            Cell Room arranges personalized orders for customers and delivers at their door steps. Hence, customers need not to worry about buying daily groceries or shopping some high-end gadgets, etc. Cell Room works as one-stop solution for its valuable customers whether it is about buying, selling or exchanging with whatever products they want.  <br />  <br /></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;