import React from 'react'
import TitleList from '../../components/TitleList/TitleList'
import ProductItem from '../ProductItem/ProductItem'
const featuredProducts = [
  {
    name: 'iPhone 12 Pro Max',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/1.jpg?raw=true',
    price: 'Giá: 1.099₫'
  },
  {
    name: 'Samsung Galaxy S21 Ultra',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/2.jpg?raw=true',
    price: 'Giá: 1.099₫'
  },
  {
    name: 'Google Pixel 6 Pro',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/3.jpg?raw=true',
    price: 'Giá: 1.399₫'
  },
  {
    name: 'OnePlus 9 Pro',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/4.jpg?raw=true',
    price: 'Giá: 499₫'
  }
]

const otherProducts = [
  {
    name: 'Xiaomi Mi 11',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/5.jpg?raw=true',
    price: 'Giá: 799₫'
  },
  {
    name: 'Sony Xperia 1 III',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/6.jpg?raw=true',
    price: 'Giá: 599₫'
  },
  {
    name: 'LG Wing',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/1.jpg?raw=true',
    price: 'Giá: 998₫'
  },
  {
    name: 'Huawei P40 Pro',
    image: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/2.jpg?raw=true',
    price: 'Giá: 499₫'
  }
]
function BuyBestPrice() {
  return (
    <div className='container'>
      <header className='bg-primary p-4 text-center'>
        <h1 className='text-2xl font-bold mb-2'>Điện thoại giá tốt</h1>
        <p>Giá tốt nhất</p>
      </header>
      <main className='container mx-auto px-4'>
        <TitleList title='Sản phẩm nổi bật' />
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {featuredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ul>
        <TitleList title='Sản phẩm khác' />
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {otherProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default BuyBestPrice
