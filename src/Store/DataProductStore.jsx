import axios from 'axios'
import { create } from 'zustand'
const dataProductStore = (set, get) => ({
  data_products: [],
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ data_products: response.data })
  }
})
export const useDataProduct = create(dataProductStore)
