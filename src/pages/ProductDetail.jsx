import React, { useEffect } from 'react'
import Breadcrum from '../ProductDetail/Breadcrum/Breadcrum'
import ProductDisplay from '../ProductDetail/ProductDisplay/ProductDisplay'
import DescriptionBox from '../ProductDetail/DescriptionBox/DescriptionBox'
import RelatedProducts from '../ProductDetail/RelatedProducts/RelatedProducts'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useProducts } from '../Store/ProductsStore'

function ProductDetail() {
  const productsList = useProducts((state) => state.productsList)
  console.log(productsList)
  const { productId } = useParams()
  console.log(productId)
  console.log(typeof +productId)
  const product = productsList.find((e) => e.productsId === +productId)
  console.log(product)
  return (
    <div>
      <Navbar />
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
      <Footer />
    </div>
  )
}

export default ProductDetail
