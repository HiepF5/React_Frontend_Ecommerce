import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Card = ({ clothes }) => {
  return (
    <div>
      <img src={clothes.img} alt='' />

      <div className='flex items-center w-[270px] justify-between'>
        <div>
          <p className='font-bold text-2xl py-2'>{clothes.title}</p>
          <p>Explore Now!</p>
        </div>
        <div>
          <FaLongArrowAltRight className='w-[28px] h-[28px] text-blue-300' />
        </div>
      </div>
    </div>
  )
}

export default Card
