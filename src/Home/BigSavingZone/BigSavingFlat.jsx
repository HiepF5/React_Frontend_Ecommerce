import React from 'react'
import BigSav_4 from '../../assets/Big_Sav_4.png'
import BigSav_5 from '../../assets/Big_Sav_5.png'
import { IoIosArrowRoundDown } from 'react-icons/io'
const ProductsData = [
  {
    id: 4,
    img: BigSav_4,
    title: 'Urban Shirts',
    description: 'Live in local',
    sale: 'FLAT 60% OFF',
    aosDelay: '200'
  },
  {
    id: 5,
    img: BigSav_5,
    title: 'Oversized T-Shirts',
    description: 'Street Style Icon',
    sale: 'FLAT 60% OFF',
    aosDelay: '200'
  }
]

const BigSavingFlat = () => {
  return (
    <div className=' text-black'>
      <div className='container pt-[25px] flex gap-4'>
        {ProductsData.map((data) => (
          <div key={data.id}>
            <div className='flex items-center'>
              {/* text content section  */}
              <div className='absolute flex flex-col text-left pl-[350px] gap-4'>
                <p className='text-3xl font-bold max-w-[160px]'>{data.title}</p>
                <p className=''>{data.description}</p>
                <p className='font-bold'>{data.sale}</p>
                <div className='flex items-center flex-col'>
                  <IoIosArrowRoundDown className='w-[40px] h-[35px] ' />
                </div>
                <div>
                  <button className='font-bold border border-slate-500 rounded-sm  py-2 px-8  hover:scale-105 '>
                    SHOP NOW
                  </button>
                </div>
              </div>
              {/* image section  */}
              <div>
                <img
                  className='
                  object-contain mx-auto
                   border rounded '
                  src={data.img}
                  alt=''
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BigSavingFlat
