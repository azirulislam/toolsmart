import React from 'react';
import img from '../../assets/images/img.jpg';

const MyProfile = () => {
    return (
        <div className='p-12'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div class="card-body my-20">
                    <h2 class="card-title text-3xl text-primary ml-16">I am MD: AZIRUL ISLAM </h2>
                    <p className='text-2xl'>I`m a Web Developer. My skill is about on HTML, CSS, JAVASCRIPT, BOOTSTRAP, TAILWIND and REACT. </p>
                    <div class="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;