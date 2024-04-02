import React from 'react'
import Item from '../Item/Item'
import TitleList from '../../components/TitleList/TitleList'
const data_products = [
  {
    id: '1',
    name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
    image: 'https://github.com/HiepF5/DB_Shopper/blob/main/product_1.png?raw=true',
    new_price: 50.0,
    old_price: 80.5
  },
  {
    id: '2',
    name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
    image: 'https://github.com/HiepF5/DB_Shopper/blob/main/product_2.png?raw=true',
    new_price: 85.0,
    old_price: 120.5
  },
  {
    id: '3',
    name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
    image: 'https://github.com/HiepF5/DB_Shopper/blob/main/product_3.png?raw=true',
    new_price: 60.0,
    old_price: 100.5
  },
  {
    id: '4',
    name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
    image: 'https://github.com/HiepF5/DB_Shopper/blob/main/product_4.png?raw=true',
    new_price: 100.0,
    old_price: 150.0
  }
]
function RelatedProducts() {
  return (
    <div className='container'>
      <TitleList title='Similar Product' />
      <div className='flex flex-col items-center '>
        <div className='flex mt-10 gap-5 mb-10'>
          {data_products.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
