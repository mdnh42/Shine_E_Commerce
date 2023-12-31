import React from 'react';
import { FaBeer, FaHouseUser, FaSearch, FaUserCircle, FaCartPlus, FaSmileBeam, FaBlenderPhone, FaAmericanSignLanguageInterpreting } from "react-icons/fa";

const Header = () => {
    return (
        <div className="">
            <div className='p-6 bg-orange-500 font-bold text-white text-center'>
                <h1 className="lg:text-4xl md:text-2xl sm:text-xl">Free Delivery | Shop Your Favorite Dress OF 20% Discount</h1>

            </div >
            <div className='flex justify-between mx-10'>
                <div className="">
                    <h1 className='lg:text-5xl md:text-3xl sm:text-xl text-indigo-700 font-bold'>SHEIN</h1>
                </div>
                <div className='flex justify-between place-items-center'>
                    <input className="border py-2 rounded" type="text" placeholder="Dress" />
                    <span className="px-5"> <a className='hover:text-cyan-800' href=""><FaSearch /></a> </span>
                    <ul className="flex">
                        <li className="lg:px-5 md:px-2 sm:px-1 text-gray-700"> <a className='hover:bg-gray-900 text-white' href=""><FaUserCircle /></a> </li>
                        <li className="lg:px-5 md:px-2 sm:px-1 text-gray-700"><a href=""><FaCartPlus /></a></li>
                        <li className="lg:px-5 md:px-2 sm:px-1 text-gray-700"><a href=""><FaSmileBeam /></a></li>
                        <li className="lg:px-5 md:px-2 sm:px-1 text-gray-700"><a href=""><FaBlenderPhone /></a></li>
                        <li className="lg:px-5 md:px-2 sm:px-1 text-gray-700"><a href=""><FaAmericanSignLanguageInterpreting /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
