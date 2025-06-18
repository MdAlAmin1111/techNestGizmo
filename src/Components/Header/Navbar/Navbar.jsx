import React from 'react';
import logo from '../../../assets/logo.png'
import { Search, UserRound } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-[1280px] mx-auto px-10 bg-gray-50 py-4 rounded-[2px] border-b-[1px] border-[#00000040] text-[#155e75]'>
            {/* for logo */}
            <div >
                <img width={160} src={logo} alt="" />
            </div>

            {/* for menu and icon*/}
            <div className='flex gap-4 my-2'>
                {/* for menu */}
                <nav className='flex gap-4 text-lg font-medium opacity-90'>
                    <NavLink to="/" className="font-bold">Home</NavLink>
                    <NavLink to="/shop" className="font-bold">Shop</NavLink>
                    <NavLink to="/wholesale" className="font-bold">Wholesale</NavLink>
                    <NavLink to="/about" className="font-bold">About</NavLink>
                    <NavLink to="/contact" className="font-bold">Contact</NavLink>
                </nav>
                {/* for icon */}
                <div className='flex gap-3'>
                    <Search color="#812c30" />
                    <UserRound color="#812c30" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;