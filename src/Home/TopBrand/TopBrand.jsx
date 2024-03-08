import React from 'react'
import NIKE from '../../assets/Nike.png'
import HM from '../../assets/HM.png'
import LEVI from '../../assets/LEVIS.png'
import POLO from '../../assets/US.png'
import PUMA from '../../assets/PUMA.png'
import { data } from 'autoprefixer'
const BrandsData = [
  {
    id: 1,
    img: NIKE,
    title: 'Knitted Joggers',
    aosDelay: '0'
  },
  {
    id: 2,
    img: HM,
    title: 'Full Sleeve',
    aosDelay: '200'
  },
  {
    id: 3,
    img: LEVI,
    title: 'Active T-Shirts',
    aosDelay: '200'
  },
  {
    id: 4,
    img: POLO,
    title: 'Urban Shirts',
    aosDelay: '200'
  },
  {
    id: 5,
    img: PUMA,
    title: 'Urban Shirts',
    aosDelay: '200'
  }
]
const TopBrand = () => {
  return (
    <div className='container pt-[50px]'>
      <div className='bg-slate-700 h-[357px] text-white  flex flex-col gap-8 items-center justify-center'>
        <h1 className='text-5xl font-bold'>Top Brands Deal</h1>
        <p className='text-sm'>
          Up To <span class='text-yellow-400'>60%</span> off on brands
        </p>
        <div className='flex gap-4 '>
          {BrandsData.map((data) => (
            <div className='bg-white w-[177px] h-[85px] flex items-center justify-center'>
              <img className=' object-contain' src={data.img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBrand
