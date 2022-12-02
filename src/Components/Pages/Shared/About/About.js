import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../../../Assets/about/about.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={about} className="w-6/12 rounded-lg shadow-2xl" />
                <div className='ml-7'>
                    <h1 className="text-5xl font-bold text-white">ABOUT <span className='text-sky-400'>US</span> </h1>
                    <p className="py-6">Cell Room is the combination of first ever e-commerce and re-commerce marketplace in Bangladesh where customers can purchase anything by personalized orders as well as sell their unneeded/surplus products such as smartphones, laptops, appliances, vehicles, etc. and exchange also.  <br />  <br />

                        Cell Room arranges personalized orders for customers and delivers at their door steps. Hence, customers need not to worry about buying daily groceries or shopping some high-end gadgets, etc. Cell Room works as one-stop solution for its valuable customers whether it is about buying, selling or exchanging with whatever products they want.  <br />  <br />

                        Cell Room offers a seller to sell unneeded items at any convenient location and time, and accepts various payment methods either digitally or by cash. Cell Room’s goal is to give endless options to consumers - when a consumer gets money by selling his/her unneeded stuffs, it automatically increases his/her purchasing power at that moment.  <br />  <br />

                        In a nutshell, Cell Room is the only digital platform in the country that lets customers experience secure, hassle-free and haggle-free buying or selling or exchanging at shortest possible time with special privileges.</p>
                    <Link to="/"><button className="btn btn-wide btn-outline btn-accent my-8">Go to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;