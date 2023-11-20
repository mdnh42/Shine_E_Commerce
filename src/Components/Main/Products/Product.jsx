import React from 'react';

const Product = ({ product }) => {
    console.log(product);
    return (

        <div className=''>
            {
                <p key={product.id} className='rounded-full w-150 h-150 bg-slate-100 m-5'>
                    <img className='' src={product.img} alt={product.product_name} />
                    <span className='text-center'> {product.product_name}</span>
                </p>

            }
        </div>

    );
};

export default Product;