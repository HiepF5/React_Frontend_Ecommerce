import React from 'react'
import Header from '../componentsAdmin/HeaderAdmin'
import Navbar from '../componentsAdmin/NavbarAdmin'
import DashboardAdmin from './DashboardAdmin'
import { useProducts } from '../../Store/ProductsStore'
import ChartReport from '../../Report/ChartReport'

const DashboardPageAdmin = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <Header />
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Navbar />
        </div>
        {/* container */}
        <div className='col-span-10'>
          <DashboardAdmin />
        </div>
      </div>
    </div>
  )
}

export default DashboardPageAdmin
