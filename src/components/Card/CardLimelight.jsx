import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
const CardLimelight = ({ clothes }) => {
  return (
    <div className='relative'>
      <div className='absolute bg-slate-100 rounded-full border px-1.5 py-1.5 top-[26px] right-[26px]'>
        <FaRegHeart className='z-20' />
      </div>
      <img src={clothes.img} alt='' />

      <div className='flex items-center w-[282px] justify-between'>
        <div>
          <p className='font-bold py-2'>{clothes.title}</p>
          <p>{clothes.brand}</p>
        </div>
        <div className=' bg-slate-200 px-2 py-2 border rounded'>
          <button>{clothes.price}</button>
        </div>
      </div>
    </div>
  )
}

export default CardLimelight
