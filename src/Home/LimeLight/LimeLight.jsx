import React from 'react'
import TitleList from '../../components/TitleList/TitleList'
import Product_1 from '../../assets/HomeImg/Product_1.png'
import Product_2 from '../../assets/HomeImg/Product_2.png'
import Product_3 from '../../assets/HomeImg/Product_3.png'
import Product_4 from '../../assets/HomeImg/Product_4.png'
import CardLimelight from '../../components/Card/CardLimelight'

const ProductsData = [
  {
    id: 1,
    img: Product_1,
    title: 'Samsung Galaxy S21 Ultra',
    brand: 'Samsung',
    price: '$123.00',
    aosDelay: '200'
  },
  {
    id: 2,
    img: Product_2,
    title: 'Oppo Find X3 Pro',
    brand: 'Oppo',
    price: '$37.00',
    aosDelay: '200'
  },
  {
    id: 3,
    img: Product_3,
    title: 'iPhone 13 Pro Max',
    brand: 'Apple',
    price: '$37.00',
    aosDelay: '200'
  },
  {
    id: 4,
    img: Product_4,
    title: 'Nokia 8.3 5G',
    brand: 'Nokia',
    price: '$119.00',
    aosDelay: '200'
  }
]
const LimeLight = () => {
  return (
    <div>
      <div className='container'>
        <TitleList title='In The Limelight' />
        <div className='pt-[50px] flex flex-wrap justify-between'>
          {ProductsData.map((data) => (
            <CardLimelight clothes={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LimeLight
