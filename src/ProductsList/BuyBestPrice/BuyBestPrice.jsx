import React, { useEffect, useState } from 'react'
import TitleList from '../../components/TitleList/TitleList'
import ProductItem from '../ProductItem/ProductItem'
import { useUsers } from '../../Store/UsersStore'

function BuyBestPrice() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [lastProducts, setLastProducts] = useState([])
  const userData = useUsers((state) => state.userData)
  const userId = userData.id ? userData.id : 1
  useEffect(() => {
    fetch(`http://localhost:8081/api/users/${userId}/mostPurchasedProducts`)
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setFeaturedProducts(data)
        } else {
          // Handle the case when data is not an array
          console.error('Expected an array but received:', data)
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8081/api/total-quantity')
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((item) => ({
          productsId: item[0],
          productsName: item[1],
          image: item[2],
          price: item[3]
        }))
        setLastProducts(formattedProducts)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <div className='container'>
      <header className='bg-primary p-4 text-center'>
        <h1 className='text-2xl font-bold mb-2'>Điện thoại giá tốt</h1>
        <p>Giá tốt nhất</p>
      </header>
      <main className='container mx-auto px-4'>
        <TitleList title='Sản phẩm nổi bật' />
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {featuredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ul>
        <TitleList title='Sản phẩm khác' />
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {lastProducts.slice(0, 4).map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default BuyBestPrice
