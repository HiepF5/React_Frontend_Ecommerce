import React from 'react'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaSquareInstagram } from 'react-icons/fa6'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import AppStore from '../../assets/HomeImg/AppStore.png'
import GGPlay from '../../assets/HomeImg/GGPlay.png'
import { FaArrowDownLong } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='container text-white pt-[50px] bg-black/70 w-[1440px] h-[731px]'>
      <div className='flex justify-center gap-36 '>
        <div className='flex flex-col gap-7'>
          <h1 className='text-2xl font-bold'>Need Help</h1>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Returns & Refunds</p>
          <p>FAQ</p>
          <p>Career</p>
        </div>
        <div className='flex flex-col gap-7'>
          <h1 className='text-2xl font-bold'>Company</h1>
          <p>About Us</p>
          <p>euphoria Blog</p>
          <p>euphoriastan</p>
          <p>Collaboration</p>
          <p>Media</p>
        </div>
        <div className='flex flex-col gap-7'>
          <h1 className='text-2xl font-bold '>More Info</h1>
          <p>Term and conditions</p>
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Sitemap</p>
        </div>
        <div className='flex flex-col gap-7'>
          <h1 className='text-2xl  font-bold'>Location</h1>
          <p>support@euphoria.in</p>
          <p>Hanoi, city</p>
          <p>Viet Nam 2024</p>
        </div>
      </div>
      <div className='flex justify-between pt-[50px] px-24 pb-9'>
        <div className='flex text-white text-3xl gap-1'>
          <FaSquareFacebook />
          <FaSquareInstagram />
          <FaSquareTwitter />
          <FaLinkedin />
        </div>
        <div>
          <h1 className='text-white text-2xl font-bold'>Download The App</h1>
          <div className='flex pt-6 gap-3'>
            <img src={GGPlay} alt='' />
            <img src={AppStore} alt='' />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between p-5 border-t border-b border-gray-200/40'>
        <h1 className='text-2xl'>Popular Categories</h1>
        <FaArrowDownLong />
      </div>

      <p className='text-center pt-6'>Copyright © 2024 All rights reserved Group</p>
    </div>
  )
}

export default Footer
