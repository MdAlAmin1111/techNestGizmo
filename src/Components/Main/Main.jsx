import React from 'react';
import { Link } from 'react-router';
import laptop from '../../assets/laptop.png';
import laptop2 from '../../assets/laptop2.png'
import headphone from '../../assets/headphone.png';
import development from '../../assets/development.png';
import warehouse from '../../assets/warehouse.png';
import foldedLaptop from '../../assets/foldedLaptop.png';
import mouse from '../../assets/computer-mouse.png'

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-2 px-5 lg:px-10 py-10 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 lg:flex lg:justify-between lg:text-center mb-10 flex-wrap'>
                <div className='flex justify-center'>
                    <Link className='flex flex-col items-center max-w-[100px] gap-1.5'>
                        <img className='w-full' src={laptop} alt="" />
                        <p className='font-bold text-base text-[#155e75]'>Laptop <br />Accessories</p>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link className='flex flex-col items-center max-w-[100px] gap-1.5'>
                        <img className='w-full' src={headphone} alt="" />
                        <p className='font-bold text-base text-[#155e75]'>Wireless <br />Gadgets</p>
                    </Link>
                </div>

                <div className='flex justify-center'>
                    <Link className='flex flex-col items-center max-w-[100px] gap-1.5'>
                        <img className='w-full' src={development} alt="" />
                        <p className='font-bold text-base text-[#155e75]'>Gaming <br />Gear</p>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link className='flex flex-col items-center max-w-[100px] gap-1.5'>
                        <img className='w-full' src={warehouse} alt="" />
                        <p className='font-bold text-base text-[#155e75]'>Wholesale <br />Offers</p>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4'>
                <div className='col-span-2 row-span-2 bg-gray-200 rounded-[8px] py-5 lg:py-10'>
                    <Link className='flex flex-col items-center justify-center'>
                        <p className='text-3xl font-bold text-[#155e75]'>FLASH DEALS/ <br />COMBO OFFERS</p>
                        <img className='w-full' src={foldedLaptop} alt="" />
                    </Link>
                </div>

                <div className='col-span-2  bg-gray-200 rounded-[8px] px-12 py-5'>
                    <Link className='flex justify-between items-center py-4'>
                        <img className='w-[40%]' src={laptop2} alt="laptop" />
                        <span className='text-7xl text-[#155e75]'>+</span>
                        <img className='w-[40%]' src={mouse} alt="mouse" />
                    </Link>
                </div>

                <div className='col-span-2  bg-gray-200 rounded-[8px] flex items-center px-12 py-10'>
                    <Link className='text-4xl font-bold text-[#155e75]'>
                        Wholesale <br />Offers
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Main;