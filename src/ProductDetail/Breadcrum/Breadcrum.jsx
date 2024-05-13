import React from 'react'
import arrow_icon from '@assets/img/breadcrum_arrow.png'
function Breadcrum({ product }) {
  return (
    <div className='container flex items-center gap-8 text-gray-600 text-base font-semibold capitalize my-[60px] mx-[170px] '>
      HOME
      <img src={arrow_icon} alt='' /> SHOP
      <img src={arrow_icon} alt='' /> {product.brand}
      <img src={arrow_icon} alt='' /> {product.name}
    </div>
  )
}

export default Breadcrum
