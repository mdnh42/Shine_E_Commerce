import React from 'react';
import Banner from '../../Banner/Banner';
import DiscountSeciton from './DiscountSeciton';
import Offer from './Offer';
import Navbar from '../../Shared/Header/Navbar';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscountSeciton></DiscountSeciton>

            <Offer></Offer>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;