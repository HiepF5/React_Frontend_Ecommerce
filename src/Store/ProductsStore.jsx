import axios from 'axios'
import { create } from 'zustand'

const productsStore = (set, get) => ({
  productsList: [],
  categoryNow: '',
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ productsList: response.data })
  },
  setCategoryNow: (category) => {
    set({ categoryNow: category })
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
  }
})

export const useProducts = create(productsStore)
