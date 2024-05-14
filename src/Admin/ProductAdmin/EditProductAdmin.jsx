import React, { useState, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useProducts } from '../../Store/ProductsStore'
import { toast } from 'react-toastify'

export const EditProductAdmin = ({ editPopup, setEditPopup, product }) => {
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [imageUrl2, setImage2Url] = useState('')
  const [imageUrl3, setImage3Url] = useState('')
  const [imageUrl4, setImage4Url] = useState('')

  const updateProduct = useProducts((state) => state.updateProduct)

  useEffect(() => {
    if (product) {
      setProductName(product.productsName)
      setQuantity(product.quantity)
      setPrice(product.price)
      setOldPrice(product.sold)
      setBrand(product.brand)
      setDescription(product.description)
      setImageUrl(product.image)
      setImage2Url(product.image2)
      setImage3Url(product.image3)
      setImage4Url(product.image4)
    }
  }, [product])

  const handleUpdateProduct = () => {
    const updatedProduct = {
      ...product,
      productsName: productName,
      quantity: quantity,
      price: price,
      sold: oldPrice,
      brand: brand,
      description: description,
      image: imageUrl,
      image2: imageUrl2,
      image3: imageUrl3,
      image4: imageUrl4
    }

    updateProduct(updatedProduct)
    toast.success('Update success')
    setEditPopup(false)
  }

  return (
    <>
      {editPopup && (
        <div className='popup'>
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]'>
              {/* header */}
              <div className='flex items-center justify-between'>
                <div>
                  <h1>Edit Product</h1>
                </div>
                <div>
                  <IoCloseOutline className='text-2xl cursor-pointer ' onClick={() => setEditPopup(false)} />
                </div>
              </div>
              {/* form section */}
              <div className='mt-4'>
                <input
                  type='text'
                  placeholder='Product Name'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <input
                  type='number'
                  placeholder='Quantity'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Price'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Old Price'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={oldPrice}
                  onChange={(e) => setOldPrice(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Brand'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Description'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Image URL'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Image URL 2'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={imageUrl2}
                  onChange={(e) => setImage2Url(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Image URL 3'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={imageUrl3}
                  onChange={(e) => setImage3Url(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Image URL 4'
                  className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={imageUrl4}
                  onChange={(e) => setImage4Url(e.target.value)}
                />

                <div className='flex justify-center'>
                  <button
                    className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full '
                    onClick={handleUpdateProduct}
                  >
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
