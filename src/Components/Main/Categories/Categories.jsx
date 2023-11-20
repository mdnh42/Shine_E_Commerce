import React, { useEffect, useState } from 'react';
import Category from './Category';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate an API call or fetch categories from your backend
                const response = await fetch('./Categories.json');
                const data = await response.json();
                setCategories(data.categories); // Update the state with the correct data
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='w-[90%] m-auto'>
            <h2 className='text-center text-fuchsia-800 font-bold text-3xl'>Categories</h2>
            <ul className=''>
                {categories.map((category) => (

                    < Category
                        key={category.id}
                        category={category}
                    ></Category>
                ))}
            </ul>
        </div >
    );
};

export default Categories;