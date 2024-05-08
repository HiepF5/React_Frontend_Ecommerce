import React from 'react'
import { ImHome } from 'react-icons/im'
import { IoMdPhonePortrait } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='p-4 flex items-center gap-3'>
        <ImHome className='w-6 h-6 opacity-50' />
        <Link to='/admin' className='text-[16px]'>
          Dashboard
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <IoMdPhonePortrait className='w-6 h-6 opacity-50' />
        <Link to='/admin/product' className='text-[16px]'>
          Products
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <IoMdPhonePortrait className='w-6 h-6 opacity-50' />
        <Link to='/admin/product' className='text-[16px]'>
          Order
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <IoMdPhonePortrait className='w-6 h-6 opacity-50' />
        <Link to='/admin/product' className='text-[16px]'>
          Thống kê
        </Link>
      </div>
    </>
  )
}

export default Navbar
