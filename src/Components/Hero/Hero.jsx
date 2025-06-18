import React from 'react';
import heroImage from '../../assets/hero-laptop-3.png';
import { Link } from 'react-router';



const Hero = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-10 flex flex-row items-center justify-between bg-gray-200 rounded-[2px]'>
            <div>
                <p className='text-4xl font-bold leading-[50px] mb-6 text-[#155e75]'>USED LAPTOP,<br />NEW<br />PERFORMANCE</p>
                <Link to='/shop'><button className='btn btn-primary bg-[#812c30] border-none shadow-none text-white font-medium'>SHOP NOW</button></Link>
            </div>
            <div>
                <img src={heroImage} className='w-full' alt="" />
            </div>
        </div>
    );
};

export default Hero;