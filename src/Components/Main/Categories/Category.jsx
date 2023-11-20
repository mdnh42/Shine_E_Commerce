import React from 'react';

const Category = ({ category }) => {
    return (
        <div className='grid grid-cols-3 lg:grid-cols-6 sm:grid-cols-3'>
            {category.products.map((product) => (
                <p key={product.id} className='rounded-full w-150 h-150 bg-slate-100 m-5'>
                    <img className='rounded-full' src={product.image} alt={product.product_name} />
                    <span className='text-center bg-red-500 text-white py-2 px-5 ml-12 rounded'> {product.product_name}</span>
                </p>

            ))}
        </div>
    );
};

export default Category;
