import React from 'react'
import TitleList from '../../components/TitleList/TitleList'
import Card from '../../components/Card/Card'
import Clothes_9 from '../../assets/HomeImg/Clothes_9.png'
import Clothes_10 from '../../assets/HomeImg/Clothes_10.png'
import Clothes_11 from '../../assets/HomeImg/Clothes_11.png'
import Clothes_12 from '../../assets/HomeImg/Clothes_12.png'

const ProductsData = [
  {
    id: 1,
    img: Clothes_9,
    title: 'Iphone 16',
    aosDelay: '200'
  },
  {
    id: 2,
    img: Clothes_10,
    title: 'Samsung S23 Ultra',
    aosDelay: '200'
  },
  {
    id: 3,
    img: Clothes_11,
    title: 'Samsung S23 Ultra Pro',
    aosDelay: '200'
  },
  {
    id: 4,
    img: Clothes_12,
    title: 'Oppo Realmy 16',
    aosDelay: '200'
  }
]
const CategoriWomen = () => {
  return (
    <div>
      <div className='container'>
        <TitleList title='Smart Phone News' />
        <div className='pt-[50px] flex flex-wrap gap-7 justify-between'>
          {ProductsData.map((data) => (
            <Card clothes={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriWomen
