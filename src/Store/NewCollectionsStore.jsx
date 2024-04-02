import axios from 'axios'
import { create } from 'zustand'
const newCollections = (set, get) => ({
  new_collections: [],
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ new_collections: response.data })
  }
})
export const useNewCollections = create(newCollections)
