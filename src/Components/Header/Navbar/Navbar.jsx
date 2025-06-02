import React from 'react';
import logo from '../../../assets/logo.png'
import { Search, UserRound } from 'lucide-react';

const Navbar = () => {
    return (
        <navbar>
            <div className='flex justify-between max-w-[1280px] mx-auto px-10 bg-gray-50 py-2'>
                {/* for logo */}
                <div >
                    <img width={160} src={logo} alt="" />
                </div>

                {/* for menu and icon*/}
                <div className='flex gap-4 my-2'>
                    {/* for menu */}
                    <div>
                        <ul className='flex gap-4 text-lg font-medium opacity-90'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Wholesale</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    {/* for icon */}
                    <div className='flex gap-3'>
                        <Search color="#812c30" />
                        <UserRound color="#812c30" />
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;