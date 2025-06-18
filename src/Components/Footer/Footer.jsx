import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto  bg-gray-50'>
            <hr className='text-[#00000040]'/>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3 px-5 md:px-10 flex-wrap'>
                <div className='bg-white px-2 md:bg-gray-50 py-2 rounded-[8px] flex gap-2 items-center'>
                    <Phone color="#812c30" size={30} />
                    <p className='text-[20px] font-bold text-[#812c30]'>Phone: 01776198764</p>
                </div>
                <div className='bg-white px-2 md:bg-gray-50 py-2 rounded-[8px] flex gap-2 items-center'>
                    <Mail color="#812c30" size={30}/>
                    <p className='text-[20px] font-bold text-[#812c30]'>tarekgazi77@gmailcom</p>
                </div>
                <div className='bg-white px-2 md:bg-gray-50 py-2 rounded-[8px] flex gap-2 items-center'>
                    <MapPin color="#812c30" size={30}/>
                    <p className='text-[20px] font-bold text-[#812c30]'>Bashundhara R/A <br />Dhaka, Bangladesh</p>
                </div>
            </div>
            <hr className='text-[#00000040]'/>
            <div className='pt-5 pb-5 px-10 text-[#812c30] font-bold text-base'>
                <p>© 2025 Tech Nest Gizmo</p>
            </div>
        </div>
    );
};

export default Footer;