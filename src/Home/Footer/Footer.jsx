import React from 'react'

const Footer = () => {
  return (
    <div className='container pt-[50px] bg-black/70 w-[1440px] h-[731px]'>
      <div className='flex justify-center gap-5 text-white'>
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
    </div>
  )
}

export default Footer
