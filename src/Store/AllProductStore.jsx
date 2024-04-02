import axios from 'axios'
import { create } from 'zustand'

const allProductStore = (set, get) => ({
  all_products: [],
  cart: {},
  totalItem: 0,
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ all_products: response.data })
  },
  getDefaultCart: () => {
    let cart = {}
    const all_products = get().all_products
    for (let i = 0; i < all_products.length; i++) {
      cart[i] = 0
    }
    return cart
  },
  addToCart: (itemId) => {
    const currentCart = get().cart
    set({
      cart: {
        ...currentCart,
        [itemId]: (currentCart[itemId] || 0) + 1
      },
      totalItem: get().totalItem + 1 // Increment totalItem
    })
  },
  removeFromCart: (itemId) => {
    const currentCart = get().cart
    set({
      cart: {
        ...currentCart,
        [itemId]: (currentCart[itemId] || 0) - 1
      },
      totalItem: get().totalItem - 1 // Decrement totalItem
    })
  },
  getTotalCartAmount: () => {
    let totalAmount = 0
    const all_products = get().all_products
    const currentCart = get().cart
    console.log(currentCart)
    for (const item in currentCart) {
      if (currentCart[item] > 0) {
        console.log(typeof item)
        let itemInfo = all_products.find((product) => product.id == +item)
        console.log(itemInfo)
        totalAmount += itemInfo.new_price * currentCart[item]
      }
    }
    return totalAmount
  }
  // getTotalCartItems: () => {
  //   let totalItem = 0
  //   const currentCart = get().cart
  //   for (const item in currentCart) {
  //     if (currentCart[item] > 0) {
  //       totalItem += currentCart[item]
  //     }
  //   }
  //   return totalItem
  // }
})

export const useAllProduct = create(allProductStore)
