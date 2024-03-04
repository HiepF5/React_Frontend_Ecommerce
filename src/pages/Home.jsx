import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Banner from '../Home/Banner/Banner'
import Deals from '../Home/Deals/Deals'
import NewArrival from '../Home/NewArrival/NewArrival'
import BigSavingZone from '../Home/BigSavingZone/BigSavingZone'

const Home = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Banner />
      <Deals />
      <NewArrival />
      <BigSavingZone />
    </div>
  )
}

export default Home
