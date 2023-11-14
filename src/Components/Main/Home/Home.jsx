import React from 'react';
import Banner from '../../Banner/Banner';
import DiscountSeciton from './DiscountSeciton';
import Offer from './Offer';
import Navbar from '../../Shared/Header/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscountSeciton></DiscountSeciton>

            <Offer></Offer>
        </div>
    );
};

export default Home;