import React from 'react'
import CartItems from '../CartItems/CartItems'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BreadcrumCart from '../CartItems/BreadcrumCart/BreadcrumCart'

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <BreadcrumCart />
      <CartItems />
      <Footer />
    </div>
  )
}

export default CartPage
