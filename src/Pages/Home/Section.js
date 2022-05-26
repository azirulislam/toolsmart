import React, { useEffect, useState } from 'react';
import Product from './Product';
import BookingProduct from './BookingProduct';


const Section = () => {
        const [products, setProducts] = useState([]);
        const [bookProduct, setbookProduct] = useState(null);

        useEffect ( () =>{
            fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
            
        }, []);
    return (
        <div>
          <h2 className='text-primary text-4xl py-16'>Our Products</h2>  
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.map(product => <Product
                 key={product.id}
                 product={product}
                 setbookProduct={setbookProduct}
                ></Product>)
            }
        </div>
        {bookProduct && <BookingProduct bookProduct={bookProduct} setbookProduct={setbookProduct}></BookingProduct>}
        </div>
        
    );
};

export default Section;