import React from 'react'
import arrow_icon from '@assets/img/breadcrum_arrow.png'
function BreadcrumCart() {
  return (
    <div className='container flex items-center gap-8 text-gray-600 text-base font-semibold capitalize my-[60px] mx-[170px] '>
      HOME
      <img src={arrow_icon} alt='' /> Add TO Cart
    </div>
  )
}

export default BreadcrumCart
