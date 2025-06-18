import React from 'react';
import logo from '../../../assets/logo.png'
import { Search, UserRound } from 'lucide-react';
import { NavLink } from 'react-router';
import logoPart1 from '../../../assets/logoPart1.png';
import logoPart2 from '../../../assets/logoPart2.png';

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-center justify-between max-w-[1280px] mx-auto px-5 md:px-10 bg-gray-50 py-8 rounded-[2px] border-b-[1px] border-[#00000040] text-[#155e75]'>
            {/* for logo */}
            <div className='flex gap-1.5 justify-center-safe mb-2.5'>
                <img className='h-[33px]' src={logoPart1} alt="" />
                <img className='h-[33px]' src={logoPart2} alt="" />
            </div>

            {/* for menu and icon*/}
            <div className='flex items-center gap-4 my-2'>
                {/* for menu */}
                <nav className='w-full flex gap-1.5 justify-around items-center text-base md:gap-4 md:text-lg font-medium'>
                    <NavLink to="/" className="font-bold">Home</NavLink>
                    <NavLink to="/shop" className="font-bold">Shop</NavLink>
                    <NavLink to="/wholesale" className="font-bold">Wholesale</NavLink>
                    <NavLink to="/about" className="font-bold">About</NavLink>
                    <NavLink to="/contact" className="font-bold">Contact</NavLink>
                </nav>
                {/* for icon */}
                <div className='hidden  md:flex gap-3'>
                    <Search color="#812c30" />
                    <UserRound color="#812c30" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;