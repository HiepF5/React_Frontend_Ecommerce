import React, { useState } from 'react'
import { useEffect } from 'react'
import { useProducts } from '../../Store/ProductsStore'
import ProductItem from '../ProductItem/ProductItem'

export default function Products() {
  const productsList = useProducts((state) => state.productsList)
  const adjustPrice = useProducts((state) => state.adjustPrice)
  console.log(productsList)

  const categoryNow = useProducts((state) => state.categoryNow)
  console.log(categoryNow)

  const [searchTerm, setSearchTerm] = useState('')

  // Xử lý sự kiện thay đổi của ô tìm kiếm
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // Lọc danh sách sản phẩm dựa trên categoryNow và giá trị tìm kiếm
  const filteredProducts = productsList
    .filter((product) => {
      const matchesCategory = !categoryNow || product.brand === categoryNow
      return matchesCategory
    })
    .filter((product) => {
      const matchesSearchTerm = product.productsName.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesSearchTerm
    })

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Danh sách điện thoại</h2>
        {/* Ô tìm kiếm */}
        <input
          type='text'
          placeholder='Tìm kiếm sản phẩm...'
          value={searchTerm}
          onChange={handleSearchTermChange}
          className='mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts.map((product) => (
            <div key={product.productsId}>
              <ProductItem product={product} adjustPrice={adjustPrice} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
