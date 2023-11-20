import React from 'react';

const Product = ({ product }) => {
    console.log(product);
    return (

        <div className='max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md'>
            {
                <div key={product.id} className='rounded w-150 h-150 bg-slate-100 m-5'>
                    <img className='' src={product.img} alt={product.product_name} />
                    <span className='text-center'> {product.product_name}</span>
                    <p>Discount: $<del>{product.discount + 30.00}</del></p>
                    <p>Price: {product.price}</p>
                    <p>Shipping: {product.shipping}</p>
                    <p>Size: {product.size}</p>
                    <p>Color: {product.color}</p>
                    <p>Rating: {product.rating}</p>


                </div>
            }
        </div>

    );
};

export default Product;