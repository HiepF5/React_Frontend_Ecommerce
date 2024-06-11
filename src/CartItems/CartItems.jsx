import React from 'react'
import remove_icon from '@assets/img/cart_cross_icon.png'
import { useProducts } from '../Store/ProductsStore'
import { useUsers } from '../Store/UsersStore'

function CartItems() {
  const productsList = useProducts((state) => state.productsList)
  const removeFromCart = useProducts((state) => state.removeFromCart)
  const getTotalCartAmount = useProducts((state) => state.getTotalCartAmount)
  const getCartItemsForCheckout = useProducts((state) => state.getCartItemsForCheckout)
  const cart = useProducts((state) => state.cart)
  const userData = useUsers((state) => state.userData)
  const adjustPrice = useProducts((state) => state.adjustPrice)
  const shipCost = useProducts((state) => state.shipCost)
  const giftProduct = useProducts((state) => state.giftProduct)
  console.log(cart)
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
      {productsList.map((e) => {
        if (cart[e.productsId]) {
          return (
            <div key={e.id} className=' grid grid-cols-6 gap-x-20'>
              <img src={e.image} alt='' className='cartItems-product-icon h-16 w-16 col-span-1' />
              <p className='col-span-1'>{e.productsName}</p>
              <p>${e.price - adjustPrice}</p>
              <button className='col-span-1 w-16 h-12 border border-gray-300 bg-white'>{cart[e.productsId]}</button>
              <p className='col-span-1'>${e.price * cart[e.productsId]}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt=''
                className=' col-span-1 w-4 h-4 cursor-pointer'
              />
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
              <p>Shipping : {shipCost}</p>
            </div>
            {giftProduct && (
              <div className=' flex justify-between'>
                <p>Mua 1 : {giftProduct}</p>
              </div>
            )}
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
            <button
              className='w-44 h-12 ml-4 bg-black text-white text-lg font-semibold rounded-md cursor-pointer'
              onClick={() => getCartItemsForCheckout(userData.id)}
            >
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
