import React from 'react';
import Banner from '../../Banner/Banner';
import DiscountSeciton from './DiscountSeciton';
import Offer from './Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DiscountSeciton></DiscountSeciton>

            <Offer></Offer>
        </div>
    );
};

export default Home;