import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white py-8 min-w-80vh '>
            <div className='container mx-auto flex justify-between grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mx-8'>
                <div className='company_info'>
                    <h5 className='text-xl font-bold'>COMPANY INFO</h5>
                    <ul className=''>
                        <li><a href='' className='text-gray-400 hover:text-white'>About Shein</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Sustainability</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Fashion Blogger</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Supply Chain</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Careers</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Student Discount</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>#SHINE101</a></li>
                    </ul>
                </div>
                <div className='help_support'>
                    <h5 className='text-xl font-bold'>HELP & SUPPORT</h5>
                    <ul>
                        <li><a href='' className='text-gray-400 hover:text-white'>Shipping info</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Return</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Refund</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>How to Order</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>How to Track</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Size Guide</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>SHINE VIP</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Sell On Shine</a></li>
                    </ul>
                </div>
                <div className='customer_care'>
                    <h5 className='text-xl font-bold'>CUSTOMER & CARE</h5>
                    <ul>
                        <li><a href='' className='text-gray-400 hover:text-white'>Contact Us</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Payment & Tax</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Bonus Point</a></li>
                    </ul>

                </div>
                <div className='social_connect'>
                    <h5 className='text-xl font-bold'>SOCIAL CONNECT</h5>
                    <ul>
                        <li><a href='' className='text-gray-400 hover:text-white'>Facebook</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Instagram</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Twitter</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Youtube</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>Messenger</a></li>
                    </ul>
                </div>
                <div className='download'>
                    <h5 className='text-xl font-bold'>DOWNLOAD APP</h5>
                    <ul>

                        <li><a href='' className='text-gray-400 hover:text-white'>Android App</a></li>
                        <li><a href='' className='text-gray-400 hover:text-white'>iPhone App</a></li>
                    </ul>


                </div>
            </div>
            <div className='container mx-auto mt-4 flex flex-col md:flex-row items-center justify-center'>
                <input type='text' className='border rounded-lg py-2 px-4 mb-2 md:mr-2' placeholder='Subscribe' />
                <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 md:mb-0'>Subscribe</button>
                <input type='text' className='border rounded-lg py-2 px-4 mb-2 md:ml-2' placeholder='Subscribe' />
                <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 md:mb-0'>Subscribe</button>
            </div>
            <div className='container mx-auto mt-4 text-center'>
                <p className='text-gray-400 text-sm'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex vero consectetur animi error fugit ipsa tempora quaerat, sunt voluptas?
                </p>
            </div>
            <div className='container mx-auto mt-4 text-center'>
                Payment
            </div>
        </div >
    );
};

export default Footer;
