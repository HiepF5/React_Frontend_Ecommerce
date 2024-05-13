import React from 'react'
import Header from '../componentsAdmin/HeaderAdmin'
import Navbar from '../componentsAdmin/NavbarAdmin'
import StatisticalAdmin from './StatisticalAdmin'

const StatisticalPageAdmin = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <Header />
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Navbar />
        </div>
        {/* container */}
        <div className='col-span-10'>
          <StatisticalAdmin />
        </div>
      </div>
    </div>
  )
}

export default StatisticalPageAdmin
