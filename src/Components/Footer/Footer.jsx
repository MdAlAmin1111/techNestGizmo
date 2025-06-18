import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto  bg-gray-50'>
            <hr className='text-[#00000040]'/>
            <div className='flex justify-between items-center py-3 px-10 flex-wrap'>
                <div className='flex gap-2'>
                    <Phone color="#155e75" size={30} />
                    <p className='text-[20px] font-bold text-[#155e75]'>Phone: 01776198764</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Mail color="#155e75" size={30}/>
                    <p className='text-[20px] font-bold text-[#155e75]'>info@technestgizmo.com</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <MapPin color="#155e75" size={30}/>
                    <p className='text-[20px] font-bold text-[#155e75]'>128 Main Street <br />Dhaka, Bangladesh</p>
                </div>
            </div>
            <hr className='text-[#00000040]'/>
            <div className='py-5 px-10 text-[#155e75] font-bold text-base'>
                <p>© 2025 Tech Nest Gizmo</p>
            </div>
        </div>
    );
};

export default Footer;