import { useEffect } from 'react'
import { useProducts } from '../../Store/ProductsStore'
import ProductItem from '../ProductItem/ProductItem'

export default function Products() {
  const productsList = useProducts((state) => state.productsList)
  console.log(productsList)

  const categoryNow = useProducts((state) => state.categoryNow)
  console.log(categoryNow)

  // Lọc danh sách sản phẩm dựa trên categoryNow (nếu tồn tại)
  const filteredProducts = categoryNow ? productsList.filter((product) => product.brand === categoryNow) : productsList

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Danh sách điện thoại</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts.map((product) => (
            <div key={product.productsId}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
