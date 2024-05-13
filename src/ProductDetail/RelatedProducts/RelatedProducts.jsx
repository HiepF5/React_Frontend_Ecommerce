import React from 'react'
import Item from '../Item/Item'
import TitleList from '../../components/TitleList/TitleList'
import { useProducts } from '../../Store/ProductsStore'

function RelatedProducts() {
  const productsList = useProducts((state) => state.productsList.slice(0, 4)) // Lấy ra 4 sản phẩm đầu tiên
  return (
    <div className='container'>
      <TitleList title='Similar Product' />
      <div className='flex flex-col items-center '>
        <div className='flex mt-10 gap-5 mb-10'>
          {productsList.map((item, i) => (
            <Item
              key={i}
              id={item.productsId}
              name={item.productsName}
              new_price={item.price}
              old_price={item.sold}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
