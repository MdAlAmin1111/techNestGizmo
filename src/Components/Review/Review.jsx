import React from 'react';

const Review = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-5 md:px-10 bg-gray-200 py-10 text-center'>
            <div className='bg-gray-50 rounded-[8px] py-5'>
                <div className="rating">
                    <div className="mask mask-star bg-orange-400" aria-label="1 star"></div>
                    <div className="mask mask-star bg-orange-400" aria-label="2 star"></div>
                    <div className="mask mask-star bg-orange-400" aria-label="3 star"></div>
                    <div className="mask mask-star bg-orange-400" aria-label="4 star"></div>
                    <div className="mask mask-star bg-orange-400" aria-label="5 star" aria-current="true"></div>
                </div>
                <p className='text-[18px] lg:text-2xl font-semibold py-2 text-[#155e75]'>TechNest Gizmo থেকে খুব ভালো একটি ল্যাপটপ পেয়েছি।</p>
                <p className='text-base font-medium text-[#155e75]'>Raihan, Dhaka</p>
            </div>
        </div>
    );
};

export default Review;