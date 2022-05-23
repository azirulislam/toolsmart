import React from 'react';
import image1 from '../../assets/images/image1.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen " style={{ background: `url(${image1})`, backgroundSize: 'cover' }} >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-3xl font-bold">Hello, Here You Will find Some special Electronic Products.</h1>
                    <button class="btn btn-secondary">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;