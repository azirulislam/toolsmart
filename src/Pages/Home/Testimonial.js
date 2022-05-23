import React from 'react';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import Review from './Review';

const Testimonial = () => {

            const reviews = [
                {
                    _id: 1,
                    name: 'Graham Linn',
                    review: 'This kind of Electric product is aweosome.We want buy this product more.',
                    image: image2
                },
                {
                    _id: 1,
                    name:'Arther Sheifer',
                    review:'automatic tenon machines are acknowledged by the clients for features like low noise, high performance, ease of operation and low maintenance.',
                    image: image3
                },
                {
                    _id: 1,
                    name:'Romero De Melo',
                    review:'Here we find some qualified electronic product and minimum price rate.Transporting system is also very well.',
                    image: image4
                },
            ]

    return (
        <section>
        <div className=''>
        <div>
            <h2 className='text-primary py-16'>Testimonial</h2>
            <h3 className='text-xl font-bold'>Opinion of Our Client</h3>
        </div>

        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review => <Review 
                  key={review._id}
                  review={review}
                ></Review>)
            }
        </div>
    </section>
    );
};

export default Testimonial;