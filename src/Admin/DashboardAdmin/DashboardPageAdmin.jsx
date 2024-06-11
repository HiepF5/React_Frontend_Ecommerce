import React, { useState } from 'react'
import Header from '../componentsAdmin/HeaderAdmin'
import Navbar from '../componentsAdmin/NavbarAdmin'
import DashboardAdmin from './DashboardAdmin'
import { useProducts } from '../../Store/ProductsStore'
import ChartReport from '../../Report/ChartReport'
import { FaPrint } from 'react-icons/fa6'
const DashboardPageAdmin = () => {
  const [showPrint, setShowPrint] = useState(false)
  const togllePrint = () => {
    setShowPrint(!showPrint)
  }
  const handlePrint2 = () => {
    window.print()
    setShowPrint(!showPrint)
  }
  return (
    <div className='bg-[#F9FAFB]'>
      {!showPrint && <Header />}
      <div className='grid grid-cols-12'>
        {!showPrint && (
          <div className='col-span-2'>
            <Navbar />
            <button
              onClick={togllePrint}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
            >
              Toggle Sidebar
            </button>
          </div>
        )}
        {/* container */}
        <div className={showPrint ? 'col-span-12' : 'col-span-10'}>
          <DashboardAdmin setShowPrint={setShowPrint} showPrint={showPrint} />
          <button
            onClick={handlePrint2}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
          >
            <FaPrint />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardPageAdmin
