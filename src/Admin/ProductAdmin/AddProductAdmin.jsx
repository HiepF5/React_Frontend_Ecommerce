import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useProducts } from '../../Store/ProductsStore'

export const AddProductAdmin = ({ orderPopup, setOrderPopup }) => {
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const addProduct = useProducts((state) => state.addProduct)

  const handleAddProduct = () => {
    const newProduct = {
      productsName: productName,
      quantity: quantity,
      price: price,
      sold: oldPrice,
      brand: brand,
      description: description,
      image: imageUrl
    }
    console.log(newProduct)
    addProduct(newProduct)
    // Reset form fields
    setProductName('')
    setQuantity('')
    setPrice('')
    setOldPrice('')
    setBrand('')
    setDescription('')
    setImageUrl('')
    // Close the popup
    setOrderPopup(false)
  }
  return (
    <>
      {orderPopup && (
        <div className='popup'>
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]'>
              {/* header */}
              <div className='flex items-center justify-between'>
                <div>
                  <h1>Thêm Điện Thoại</h1>
                </div>
                <div>
                  <IoCloseOutline className='text-2xl cursor-pointer ' onClick={() => setOrderPopup(false)} />
                </div>
              </div>
              {/* form section */}
              <div className='mt-4'>
                <input
                  type='text'
                  placeholder='Tên Sản Phẩm'
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <input
                  type='number'
                  placeholder='Số lương'
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Giá'
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Giá cũ'
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={oldPrice}
                  onChange={(e) => setOldPrice(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Hãng (Brand) '
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Mô Tả'
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Link ảnh'
                  className=' w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />

                <div className='flex justify-center'>
                  <button
                    className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full '
                    onClick={handleAddProduct}
                  >
                    Thêm sản phẩm
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
