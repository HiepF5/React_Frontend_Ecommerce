import React from 'react'

function ProductItem({ product }) {
  return (
    <li className='bg-white rounded-lg shadow p-4'>
      <img src={product.image} alt={product.name} className='w-full object-cover mb-4' />
      <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
      <p className='text-gray-600'>{product.price}</p>
    </li>
  )
}

export default ProductItem
