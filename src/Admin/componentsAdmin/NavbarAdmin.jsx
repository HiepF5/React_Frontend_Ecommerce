import React from 'react'
import { FaHome, FaProductHunt, FaShoppingCart, FaChartBar, FaChartLine, FaMoneyBillAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='p-4 flex items-center gap-3'>
        <FaHome className='w-6 h-6 opacity-50' />
        <Link to='/admin' className='text-[16px]'>
          Dashboard
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <FaProductHunt className='w-6 h-6 opacity-50' />
        <Link to='/admin/product' className='text-[16px]'>
          Products
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <FaShoppingCart className='w-6 h-6 opacity-50' />
        <Link to='/admin/order' className='text-[16px]'>
          Order
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <FaChartBar className='w-6 h-6 opacity-50' />
        <Link to='/admin/statistical' className='text-[16px]'>
          Thống kê
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <FaChartLine className='w-6 h-6 opacity-50' />
        <Link to='/admin/kpi' className='text-[16px]'>
          KPI
        </Link>
      </div>
      <div className='p-4 flex items-center gap-3'>
        <FaMoneyBillAlt className='w-6 h-6 opacity-50' />
        <Link to='/admin/selling' className='text-[16px]'>
          Selling
        </Link>
      </div>
    </>
  )
}

export default Navbar
