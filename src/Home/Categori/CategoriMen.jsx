import React from 'react'
import TitleList from '../../components/TitleList/TitleList'
import Card from '../../components/Card/Card'
import Clothes_1 from '../../assets/HomeImg/Clothes_1.png'
import Clothes_2 from '../../assets/HomeImg/Clothes_2.png'
import Clothes_3 from '../../assets/HomeImg/Clothes_3.png'
import Clothes_4 from '../../assets/HomeImg/Clothes_4.png'
import Clothes_5 from '../../assets/HomeImg/Clothes_5.png'
import Clothes_6 from '../../assets/HomeImg/Clothes_6.png'
import Clothes_7 from '../../assets/HomeImg/Clothes_7.png'
import Clothes_8 from '../../assets/HomeImg/Clothes_8.png'
const ProductsData = [
  {
    id: 1,
    img: Clothes_1,
    title: 'Shirts',
    aosDelay: '0'
  },
  {
    id: 2,
    img: Clothes_2,
    title: 'Printed T-Shirts',
    aosDelay: '200'
  },
  {
    id: 3,
    img: Clothes_3,
    title: 'Plain T-Shirts',
    aosDelay: '0'
  },
  {
    id: 4,
    img: Clothes_4,
    title: 'Polo T-Shirts',
    aosDelay: '200'
  },
  {
    id: 5,
    img: Clothes_5,
    title: 'Hoodies & SweetShirt',
    aosDelay: '0'
  },
  {
    id: 6,
    img: Clothes_6,
    title: 'ActiveWear',
    aosDelay: '200'
  },
  {
    id: 7,
    img: Clothes_7,
    title: 'Boxers',
    aosDelay: '200'
  },
  {
    id: 8,
    img: Clothes_8,
    title: 'Jeans',
    aosDelay: '200'
  }
]
const CategoriMen = () => {
  return (
    <div>
      <div className='container'>
        <TitleList title='Categories For Men' />
        <div className='pt-[50px] flex flex-wrap gap-7 justify-between'>
          {ProductsData.map((data) => (
            <Card clothes={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriMen
