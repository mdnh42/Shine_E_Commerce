import React from 'react';

const Category = ({ category }) => {
    return (
        <div className='flex'>
            {category.products.map((product) => (
                <p key={product.id}>
                    {product.product_name}
                    <img src={product.image} alt={product.product_name} />
                </p>
            ))}
        </div>
    );
};

export default Category;
