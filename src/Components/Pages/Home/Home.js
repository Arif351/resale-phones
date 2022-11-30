import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import PhCategories from '../Shared/PhCategories/PhCategories';
import Banner from './Banner/Banner';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56 text-center"></progress>
    }
    return (

        <div>
            <Banner></Banner>
            <PhCategories></PhCategories>
        </div>
    );
};

export default Home;