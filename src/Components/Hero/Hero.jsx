import React from 'react';
import heroImage from '../../assets/hero-laptop-3.png';
import { Link } from 'react-router';



const Hero = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-5 py-5 md:px-10 flex flex-row items-center  justify-between bg-gray-200 rounded-[2px]'>
            <div className='w-[50%]'>
                <p className='md:text-4xl font-bold md:leading-[50px] mb-2 md:mb-4 text-[#155e75]'>USED LAPTOP,<br /> NEW <br /> PERFORMANCE</p>
                <Link to='/shop'><button className='p-2 rounded-[6px] bg-[#812c30] text-[10px] md:text-base border-none shadow-none text-white font-medium'>SHOP NOW</button></Link>
            </div>
            <div className='w-[50%]'>
                <img src={heroImage} className='w-full' alt="heroImage" />
            </div>
        </div>
    );
};

export default Hero;