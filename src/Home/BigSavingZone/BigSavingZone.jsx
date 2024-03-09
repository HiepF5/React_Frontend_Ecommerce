import React from 'react'
import BigSav_1 from '../../assets/HomeImg/Big_Sav_1.png'
import BigSav_2 from '../../assets/HomeImg/Big_Sav_2.png'
import BigSav_3 from '../../assets/HomeImg/Big_Sav_3.png'

import TitleList from '../../components/TitleList/TitleList'
import BigSavingFlat from './BigSavingFlat'
import { IoIosArrowRoundDown } from 'react-icons/io'
const ProductsData = [
  {
    id: 1,
    img: BigSav_1,
    title: 'Hawaiian Shirts',
    description: 'Dress up in summer vibe',
    sale: 'UPTO 50% OFF',
    direction: 'left',
    aosDelay: '0'
  },
  {
    id: 2,
    img: BigSav_2,
    title: 'Printed T-Shirts',
    description: 'New Designs Every Week',
    sale: 'UPTO 40% OFF',
    direction: 'right',

    aosDelay: '200'
  },
  {
    id: 3,
    img: BigSav_3,
    title: 'Cargo Jogger',
    description: 'Move with style & comfort',
    sale: 'UPTO 50% OFF',
    direction: 'right',

    aosDelay: '200'
  }
]
const BigSavingZone = () => {
  return (
    <div>
      <div className='container'>
        <TitleList title='Big Saving Zone' />
        <div className='flex gap-4 max-w-[1240px] text-white pt-[50px]'>
          {ProductsData.map((data) => (
            // title
            <div key={data.id}>
              <div className='flex items-center'>
                {/* text content section  */}
                <div className='absolute flex flex-col gap-4 z-10'>
                  <p className='pl-4 text-3xl font-bold max-w-[130px]'>{data.title}</p>
                  <p className='pl-4 text-sm'>{data.description}</p>
                  <p className='pl-4 font-bold'>{data.sale}</p>
                  <div className='flex items-center flex-col'>
                    <IoIosArrowRoundDown className='w-[40px] h-[35px] ' />
                    <div>
                      <button className='font-bold border border-white-500 rounded-sm  py-2 px-4  hover:scale-105 '>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
                {/* image section  */}
                <div>
                  <img
                    className={` object-contain mx-auto border rounded ${
                      data.direction === 'right' ? 'transform scale-x-[-1]' : ''
                    }`}
                    src={data.img}
                    alt=''
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BigSavingFlat />
    </div>
  )
}

export default BigSavingZone
