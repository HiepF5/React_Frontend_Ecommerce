import React, { useEffect, useState } from 'react'
import Header from '../componentsAdmin/HeaderAdmin'
import Navbar from '../componentsAdmin/NavbarAdmin'
import AOS from 'aos'
import 'aos/dist/aos.css'
import OrderAdmin from './OrderAdmin'
const OrderPageAdmin = () => {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    AOS.refresh()
  }, [])
  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='grid grid-cols-12 h-full'>
        <div className='col-span-2 '>
          <Navbar />
        </div>
        {/* container */}
        <div className='col-span-10'>
          <OrderAdmin />
        </div>
      </div>
    </div>
  )
}

export default OrderPageAdmin
