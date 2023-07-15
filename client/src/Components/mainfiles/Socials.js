import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';
export const SocMediaPanel = () => {
    return (
        <div className='pb-3'>
            <ul className='flex text-[#5658DD]'>
                <li className='px-2'>
                    <a rel="noreferrer" className="p-2 flex" target="_blank" href="https://www.facebook.com/iedccet/">
                        <FaFacebookF size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
                <li className='px-2'>
                    <a className="p-2 flex" target="_blank" href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-cet/mycompany/">
                        <FaLinkedinIn size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
                <li className='px-2'>
                    <a rel="noreferrer" className="p-2 flex" target="_blank" href="https://mobile.twitter.com/iedccet">
                        <FaTwitter size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
                <li className='px-2'>
                    <a rel="noreferrer" className="p-2 flex" target="_blank" href="https://www.instagram.com/iedc_cet/?hl=en">
                        <FaInstagram size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default function Footer ()  {
    return (
        <div className='py-24 w-fit mx-auto'>
            <SocMediaPanel />
            <p className='text-[#9CA9B3] text-[10px] text-center mt-5'>Made by IEDC CET. All Rights Reserved.</p>
        </div>
    )
}
