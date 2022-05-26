import React from 'react';

const Product = ({product, setbookProduct}) => {
    const { name, image, description, price, order, available} = product;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h3>{price}</h3>
                <p>{order}</p>
                <p>{available}</p>
                <div class="card-actions">            
                    <label for="my-modal-3" onClick={() => setbookProduct(product)}  class="btn modal-button">BOOK NOW</label>
                </div>
            </div>
        </div>
    );
};

export default Product;