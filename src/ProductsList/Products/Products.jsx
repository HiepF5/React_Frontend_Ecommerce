import { useEffect } from 'react'
import { useProducts } from '../../Store/ProductsStore'

export default function Products() {
  const productsList = useProducts((state) => state.productsList)
  console.log(productsList)

  const categoryNow = useProducts((state) => state.categoryNow)
  console.log(categoryNow)
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Danh sách điện thoại</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {productsList.map((product) => {
            if (categoryNow === product.brand) {
              return (
                <div key={product.productsId} className='group relative '>
                  <div className='overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
                    <img src={product.image} alt={'Chưa update'} className=' h-[200px] w-full object-center h-auto' />
                  </div>
                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h3 className='text-sm text-gray-700'>
                        <a>
                          <span aria-hidden='true' className='absolute inset-0' />
                          {product.productsName}
                        </a>
                      </h3>
                      <p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
                    </div>
                    <p className='text-sm font-medium text-gray-900'>{product.price}</p>
                  </div>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}
