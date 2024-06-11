import axios from 'axios'
import { create } from 'zustand'

const kpiStore = (set, get) => ({
  top5Users: [],
  top1Month: '',
  totalOrders: 0,
  totalOrderAmount: 0,
  countUser: 0,
  productQuantities: [],
  ordersData: [],

  fetchTop5Users: async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/user/top5count')
      set({ top5Users: response.data })
    } catch (error) {
      console.error('Error fetching top 5 users:', error)
    }
  },
  fetchProductQuantities: async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/total-quantity')
      set({ productQuantities: response.data })
    } catch (error) {
      console.error('Error fetching product quantities:', error)
    }
  },
  fetchTop1Month: async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/orders/month-with-most-orders')
      set({ top1Month: response.data })
    } catch (error) {
      console.error('Error fetching top month:', error)
    }
  },
  fetchTotalOrders: async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/orders/count')
      set({ totalOrders: response.data })
    } catch (error) {
      console.error('Error fetching total orders:', error)
    }
  },

  fetchTotalOrderAmount: async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/orders/totalAmount')
      set({ totalOrderAmount: response.data })
    } catch (error) {
      console.error('Error fetching total order amount:', error)
    }
  },
  fetchCountUser: async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/user/total')
      set({ countUser: response.data })
    } catch (error) {
      console.error('Error fetching total user count:', error)
    }
  },
  fetchOrdersData: async () => {
    const data = []
    for (let i = 1; i <= 12; i++) {
      try {
        const response = await axios.get(`http://localhost:8081/api/orders/byMonth?month=${i}`)
        data.push(...response.data)
      } catch (error) {
        console.error(`Error fetching orders data for month ${i}:`, error)
      }
    }
    set({ ordersData: data })
  }
})

export const useKpi = create(kpiStore)
