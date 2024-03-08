import React from 'react'
import TitleList from '../../components/TitleList/TitleList'
import Product_1 from '../../assets/Product_1.png'
import Product_2 from '../../assets/Product_2.png'
import Product_3 from '../../assets/Product_3.png'
import Product_4 from '../../assets/Product_4.png'
import CardLimelight from '../../components/Card/CardLimelight'

const ProductsData = [
  {
    id: 1,
    img: Product_1,
    title: 'Black SweatShirt with Black',
    brand: 'Jhanvi Brand',
    price: '$123.00',
    aosDelay: '200'
  },
  {
    id: 2,
    img: Product_2,
    title: 'Line Pattern Black Hat',
    brand: 'AS Brand',
    price: '$37.00',
    aosDelay: '200'
  },
  {
    id: 1,
    img: Product_3,
    title: 'Black Shorts',
    brand: 'MM Brand',
    price: '$37.00',
    aosDelay: '200'
  },
  {
    id: 2,
    img: Product_4,
    title: 'Levender Hoodie with Black',
    brand: 'Nike Brand',
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
