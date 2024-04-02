import React from 'react'
import remove_icon from '@assets/img/cart_cross_icon.png'
import { useAllProduct } from '../Store/AllProductStore'

function CartItems() {
  const all_products = useAllProduct((state) => state.all_products)
  const removeFromCart = useAllProduct((state) => state.removeFromCart)
  const getTotalCartAmount = useAllProduct((state) => state.getTotalCartAmount)
  const cart = useAllProduct((state) => state.cart)

  return (
    <div className='container'>
      <div className=' grid grid-cols-6 items-center gap-x-20 py-5 text-gray-700 font-semibold'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='my-5 border-t-2 border-gray-300' />
      {all_products.map((e) => {
        if (cart[e.id]) {
          return (
            <div key={e.id} className=' flex items-center gap-x-20'>
              <img src={e.image} alt='' className='cartItems-product-icon h-16' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='w-16 h-12 border border-gray-300 bg-white'>{cart[e.id]}</button>
              <p>${e.new_price * cart[e.id]}</p>
              <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt='' className=' w-4 h-4 cursor-pointer' />
            </div>
          )
        }
        return null
      })}
      <div className=' flex'>
        <div className=' flex-1 mr-24'>
          <h1 className='text-2xl font-semibold'>Cart Totals</h1>
          <div className='mt-5'>
            <div className=' flex justify-between'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-3 border-t border-gray-300' />
            <div className=' flex justify-between'>
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <div className=' flex justify-between'>
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <button className='w-64 h-16 mt-5 bg-red-500 text-white text-lg font-semibold rounded-md cursor-pointer'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <div className=' flex-1'>
          <p className='text-lg font-medium text-gray-700'>If you have a promo code, Enter it here</p>
          <div className=' mt-3 flex items-center'>
            <input type='text' placeholder='promo code' className='w-72 h-12 px-4 border border-gray-300' />
            <button className='w-44 h-12 ml-4 bg-black text-white text-lg font-semibold rounded-md cursor-pointer'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
