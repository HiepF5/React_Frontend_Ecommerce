import React from 'react'
import starIcon from '@assets/img/star_icon.png'
import starDullIcon from '@assets/img/star_dull_icon.png'

function ProductDisplay({ product }) {
  return (
    <div className='container flex items-center justify-between mx-[170px]'>
      <div className='flex gap-[17px]'>
        <div className='flex flex-col gap-[16px]'>
          <img src={product.image} alt='' className='h-[163px]' />
          <img src={product.image} alt='' className='h-[163px]' />
          <img src={product.image} alt='' className='h-[163px]' />
          <img src={product.image} alt='' className='h-[163px]' />
        </div>
        <div className=''>
          <img src={product.image} alt='' className='w-[886px] h-[700px]' />
        </div>
      </div>
      <div className='ml-[70px] flex flex-col gap-4'>
        <h1 className='text-gray-900 text-4xl font-semibold'>{product.name}</h1>
        <div className='flex gap-1 items-center mt-[13px]'>
          <img src={starIcon} alt='' className='w-5 h-5' />
          <img src={starIcon} alt='' className='w-5 h-5' />
          <img src={starIcon} alt='' className='w-5 h-5' />
          <img src={starIcon} alt='' className='w-5 h-5' />
          <img src={starDullIcon} alt='' className='w-5 h-5' />
          <p className='text-gray-700 text-sm'>(122)</p>
        </div>
        <div className='flex gap-8 my-[20px]'>
          <div className='text-gray-500 line-through text-lg'>${product.old_price}</div>
          <div className='text-red-500 text-lg font-semibold'>${product.new_price}</div>
        </div>
        <p className='text-gray-600 text-base'>
          A lightweight, usually knitted, pullover shirt close-fitting and with a round neckline and short sleeves, worn
          as an undershirt or outer garment.
        </p>
        <div>
          <h1 className='text-gray-700 text-lg font-semibold my-[35px]'>Select Size</h1>
          <div className='flex gap-5 '>
            <div className='text-gray-700 font-semibold p-4 border border-gray-300 rounded cursor-pointer'>S</div>
            <div className='text-gray-700 font-semibold p-4 border border-gray-300 rounded cursor-pointer'>M</div>
            <div className='text-gray-700 font-semibold p-4 border border-gray-300 rounded cursor-pointer'>L</div>
            <div className='text-gray-700 font-semibold p-4 border border-gray-300 rounded cursor-pointer'>XL</div>
            <div className='text-gray-700 font-semibold p-4 border border-gray-300 rounded cursor-pointer'>XXL</div>
          </div>
        </div>
        <button className='py-5 px-10 bg-red-500 text-white text-lg font-semibold rounded-lg'>ADD TO CART</button>
        <p className='text-gray-700 text-base'>
          <span className='font-semibold'>Category:</span> Women , T-Shirt, Crop Top
        </p>
        <p className='text-gray-700 text-base'>
          <span>Tags:</span> Modern , Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
