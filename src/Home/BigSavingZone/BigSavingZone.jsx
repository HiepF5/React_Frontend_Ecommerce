import React from 'react'
import BigSav_1 from '../../assets/Big_Sav_1.png'
import BigSav_2 from '../../assets/Big_Sav_2.png'
import BigSav_3 from '../../assets/Big_Sav_3.png'

import TitleList from '../../components/TitleList/TitleList'
import BigSavingFlat from './BigSavingFlat'
const ProductsData = [
  {
    id: 1,
    img: BigSav_1,
    title: 'Hawaiian Shirts',
    description: 'Dress up in summer vibe',
    sale: 'UPTO 50% OFF',
    aosDelay: '0'
  },
  {
    id: 2,
    img: BigSav_2,
    title: 'Printed T-Shirts',
    description: 'New Designs Every Week',
    sale: 'UPTO 40% OFF',
    aosDelay: '200'
  },
  {
    id: 3,
    img: BigSav_3,
    title: 'Cargo Jogger',
    description: 'Move with style & comfort',
    sale: 'UPTO 50% OFF',
    aosDelay: '200'
  }
]
const BigSavingZone = () => {
  return (
    <div>
      <div className='container'>
        <TitleList title='Big Saving Zone' />
        <div className='flex gap-4 max-w-[1240px]'>
          {ProductsData.map((data) => (
            // title
            <div key={data.id}>
              <div className='absolute '>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.sale}</p>
              </div>
              <div>
                <button>Shop Now</button>
              </div>
              {/* img  */}
              <div>
                <img src={data.img} alt='' />
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
