import axios from 'axios'
import { create } from 'zustand'

const productsStore = (set, get) => ({
  productsList: [],
  categoryNow: '',
  cart: {},
  totalItem: 0,
  checkLogin: 0,
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ productsList: response.data })
  },
  setCategoryNow: (category) => {
    set({ categoryNow: category })
  },
  setCheckLogin: () => {
    set({ checkLogin: 1 })
  },
  setProductsList: (list) => {
    set({ productsList: list })
  },
  addProduct: async (product) => {
    try {
      const response = await axios.post('http://localhost:8081/api/products', product)
      const newProduct = response.data
      set((state) => ({
        productsList: [...state.productsList, newProduct]
      }))
    } catch (error) {
      console.error('Error adding product:', error)
    }
  },
  getDefaultCart: () => {
    let cart = {}
    set({ totalItem: 0 })
    const productsList = get().productsList
    for (let i = 0; i < productsList.length; i++) {
      cart[i] = 0
    }
    return cart
  },
  addToCart: (itemId) => {
    const checkLogin = get().checkLogin
    if (checkLogin == true) {
      const currentCart = get().cart
      set({
        cart: {
          ...currentCart,
          [itemId]: (currentCart[itemId] || 0) + 1
        },
        totalItem: get().totalItem + 1 // Increment totalItem
      })
    } else {
      return 0
    }
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
    const productsList = get().productsList
    const currentCart = get().cart
    for (const item in currentCart) {
      if (currentCart[item] > 0) {
        let itemInfo = productsList.find((product) => product.productsId == +item)
        totalAmount += itemInfo.price * currentCart[item]
      }
    }
    return totalAmount
  },
  getCartItemsForCheckout: async () => {
    const cart = get().cart
    console.log(cart)
    const productsList = get().productsList
    const checkoutProducts = Object.keys(cart).map((itemId) => {
      const item = productsList.find((product) => product.productsId === parseInt(itemId))
      return {
        productId: itemId,
        quantity: cart[itemId]
      }
    })
    try {
      const response = await axios.post('http://localhost:8081/api/orders/checkout?user_id=6', checkoutProducts)
    } catch (error) {
      console.error('Error adding product:', error)
    }
    get().getDefaultCart()
    set({ cart: '' })
    console.log(first)
    console.log(checkoutProducts)
    return checkoutProducts
  }
})

export const useProducts = create(productsStore)
