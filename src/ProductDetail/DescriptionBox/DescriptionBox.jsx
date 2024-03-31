import React from 'react'

function DescriptionBox() {
  return (
    <div className='mx-[120px] my-24 container'>
      <div className='flex'>
        <div className='flex items-center justify-center text-xl font-semibold w-1/2 h-16 border border-gray-300'>
          Description
        </div>
        <div className='flex items-center justify-center text-xl w-1/2 h-16 border border-gray-300 bg-gray-100 text-gray-500'>
          Review (122)
        </div>
      </div>
      <div className='border border-gray-300 mt-4 p-6 pb-4'>
        <p className='mb-4'>
          An e-commerce website is an online platform the customers can use to produce products that are optimized for
          customers and customers of different sizes and dimensions in different countries and regions. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec.
        </p>
        <p>E-commerce website is an online platform the customers can use to produce products that are optimized</p>
      </div>
    </div>
  )
}

export default DescriptionBox
