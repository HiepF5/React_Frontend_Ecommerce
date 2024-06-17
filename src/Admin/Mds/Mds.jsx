import React, { useState } from 'react'
import { useProducts } from '../../Store/ProductsStore'
import { toast } from 'react-toastify'
const Mds = () => {
  const [newPrice, setNewPrice] = useState(0) // Giá mới của sản phẩm
  const setAdjustPrice = useProducts((state) => state.setAdjustPrice)
  const setShipCost = useProducts((state) => state.setShipCost)
  const setGiftProduct = useProducts((state) => state.setGiftProduct)
  const setBrandKey = useProducts((state) => state.setBrandKey)
  const [adjustPriceVisible, setAdjustPriceVisible] = useState(false)
  const [applyPromotionVisible, setApplyPromotionVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedPromotion, setSelectedPromotion] = useState('')

  const showAdjustPriceModal = () => {
    setAdjustPriceVisible(true)
  }

  const handleAdjustPrice = (newPrice) => {
    // Xử lý logic khi ADMIN chọn điều chỉnh giá sản phẩm
    setAdjustPrice(newPrice)
    setAdjustPriceVisible(false)
    toast.success(`Cập nhật giá, Giá đã giảm ${newPrice} so với giá gốc `)
  }

  const showApplyPromotionModal = () => {
    setApplyPromotionVisible(true)
  }
  const handleApplyPromotion = () => {
    console.log(selectedProduct)
    switch (selectedPromotion) {
      case 'discount':
        setAdjustPrice(5000)
        break
      case 'free-shipping':
        setShipCost(0)
        break
      case 'buy-one-get-one':
        setGiftProduct(1)
        break
      default:
        break
    }
    setBrandKey(selectedProduct)

    setApplyPromotionVisible(false)
    toast.success(`Cập nhật các ưu đãi để tăng doanh thu `)
  }
  return (
    <div className='flex flex-col items-center'>
      <button
        onClick={showAdjustPriceModal}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
      >
        Adjust Price
      </button>
      <button
        onClick={showApplyPromotionModal}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'
      >
        Apply Promotion
      </button>

      {adjustPriceVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg'>
            <h2 className='text-lg font-bold mb-4'>Adjust Price</h2>
            <input
              type='number'
              className='border rounded p-2 mb-4'
              value={newPrice}
              onChange={(e) => setNewPrice(parseInt(e.target.value))}
            />
            <button
              onClick={() => handleAdjustPrice(newPrice)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {applyPromotionVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg'>
            <h2 className='text-lg font-bold mb-4'>Apply Promotion</h2>
            <select
              className='border rounded p-2 mb-4'
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value=''>Select Product</option>
              <option value='iphone'>iPhone</option>
              <option value='samsung'>Samsung</option>
              <option value='xiaomi'>Xiaomi</option>
              <option value='nokia'>Nokia</option>
              <option value='oppo'>Oppo</option>
            </select>

            <select
              className='border rounded p-2 mb-4'
              value={selectedPromotion}
              onChange={(e) => setSelectedPromotion(e.target.value)}
            >
              <option value=''>Select Promotion</option>
              <option value='discount'>Discount</option>
              <option value='free-shipping'>Free Shipping</option>
              <option value='buy-one-get-one'>Buy One Get One</option>
            </select>

            <button
              onClick={handleApplyPromotion}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mds
