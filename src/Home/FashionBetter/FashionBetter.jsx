import React from 'react'
import Left_Img from '../../assets/HomeImg/Left_fashion.png'
import Right_Img from '../../assets/HomeImg/Right_fashion.png'
const FashionBetter = () => {
  return (
    <div>
      <div className='container pt-[50px]'>
        <div className='flex w-[1240px]  '>
          <div
            className='absolute w-[614px] h-[615px]
           text-white flex flex-col gap-4 justify-center pl-[70px]'
          >
            <h1 className='w-[466px] text-3xl font-bold'>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
            <h4 className='w-[350px] text-lg leading-8 tracking-tight'>
              In our journey io improve everyday fashion euphoria presents EVERYDAY wear range - Comfortable &
              Affordable fashion 24/7
            </h4>
            <div>
              <button
                className='
                bg-gray-50 rounded-md hover:scale-105 
                font-bold text-sm py-2 px-10
              text-black border bg-while'
              >
                Shop Now
              </button>
            </div>
          </div>
          <img className='h-[615px]' src={Left_Img} alt='' />
          <img className='h-[615px]' src={Right_Img} alt='' />
        </div>
      </div>
    </div>
  )
}

export default FashionBetter
