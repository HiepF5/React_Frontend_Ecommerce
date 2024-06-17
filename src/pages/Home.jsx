import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../Home/Banner/Banner'
import Deals from '../Home/Deals/Deals'
import NewArrival from '../Home/NewArrival/NewArrival'
import BigSavingZone from '../Home/BigSavingZone/BigSavingZone'
import FashionBetter from '../Home/FashionBetter/FashionBetter'
import CategoriMen from '../Home/Categori/CategoriMen'
import CategoriWomen from '../Home/Categori/CategoriWomen'
import TopBrand from '../Home/TopBrand/TopBrand'
import LimeLight from '../Home/LimeLight/LimeLight'
import Feedback from '../Home/Feedback/Feedback'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Banner />
      <Deals />
      <NewArrival />
      {/* <BigSavingZone />
      <FashionBetter />
      <CategoriMen />
      <CategoriWomen />
      <TopBrand />
      <LimeLight />
      <Feedback /> */}
      <Footer />
    </div>
  )
}

export default Home
