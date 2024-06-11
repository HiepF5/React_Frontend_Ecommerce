import React from 'react'
import Header from '../componentsAdmin/HeaderAdmin'
import Navbar from '../componentsAdmin/NavbarAdmin'
import FakeAdmin from './FakeAdmin'

const FakePageAdmin = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <Header />
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Navbar />
        </div>
        {/* container */}
        <div className='col-span-10'>
          <FakeAdmin />
        </div>
      </div>
    </div>
  )
}

export default FakePageAdmin
