import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate an API call or fetch categories from your backend
                const response = await fetch('./Product.json');
                const data = await response.json();
                setProducts(data.products); // Update the state with the correct data
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className='w-[90%] m-auto'>
                <h2 className='text-center text-fuchsia-800 font-bold text-3xl'>Categories</h2>
                <ul className='grid grid-cols-3 lg:grid-cols-6 sm:grid-cols-3'>
                    {products.map((product) => (
                        < Product
                            key={product.id}
                            product={product}
                        ></Product>
                    ))}
                </ul>
            </div >
        </div>
    );
};

export default Products;