import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
const CardFeedback = ({ clothes }) => {
  return (
    <div className=' border-2 border-solid px-3 py-3'>
      <div className='flex justify-between'>
        <img src={clothes.img} alt='' />
        <div className='flex'>
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaRegStarHalfStroke className='text-yellow-400' />
          <FaStar className='text-slate-300' />
        </div>
      </div>
      <div className='flex items-center max-w-[396px] justify-between'>
        <div>
          <p className='font-bold text-2xl py-2'>{clothes.title}</p>
          <p>{clothes.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardFeedback
