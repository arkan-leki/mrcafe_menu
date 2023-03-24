import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <nav className="flex flex-row justify-around p-3 mb-3  bg-black bg-opacity-40 drop-shadow-md ">
      <ul className='flex flex-row list-none m-0 p-0'>
        <li className='mr-3'><a href='https://www.facebook.com/mr.cafekalar' className='text-[#333] text-2xl'><FaFacebook color='white' size={30} /></a></li>
        <li className='mr-3'><a href='https://www.snapchat.com/add/mr.cafekalar' className='text-[#333] text-2xl'><FaSnapchat color='white' size={30} /></a></li>
        <li className='mr-3'><a href='https://www.instagram.com/mr.cafekalar/' className='text-[#333] text-2xl'><FaInstagram color='white' size={30} /></a></li>
        <li className='mr-3'><a href='https://www.tiktok.com/@mr.cafe4' className='text-[#333] text-2xl'><FaTiktok color='white' size={30} /></a></li>
      </ul>
    </nav>
  )
}

export default SocialBar