import React from 'react';
import AddedProduct from './AddedProduct';
import MyAllProducts from './MyAllProducts';
import MyBuyers from './MyBuyers';

const Seller = () => {
    return (
        <div>
            <AddedProduct></AddedProduct>
            <MyAllProducts></MyAllProducts>
            <MyBuyers></MyBuyers>
        </div>
    );
};

export default Seller;