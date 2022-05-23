import React from "react";

const Review = ({ review }) => {
    return (
        <div class="card ">
            <div class="card-body items-center text-center">
                <p>{review.review}</p>
                <div class="card-actions justify-end items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.image} alt="" />  
                        </div>
                    </div>
                     <div className='mr-5'>
                        <h3 className='font-bold'>{review.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;