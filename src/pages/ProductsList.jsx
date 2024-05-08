import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../ProductsList/Sidebar/Sidebar'
import Introduction from '../ProductsList/Introduction/introduction'
import BuyBestPrice from '../ProductsList/BuyBestPrice/BuyBestPrice'
import Footer from '../components/Footer/Footer'
import { useProducts } from '../Store/ProductsStore'
const ProductsList = ({ category }) => {
  useProducts.getState().setCategoryNow(category)
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Introduction />
      <BuyBestPrice />
      <Footer />
    </div>
  )
}

export default ProductsList
