import React, { useEffect, useState } from 'react'
import { useProducts } from '../../Store/ProductsStore'
import axios from 'axios'

const StatisticalAdmin = () => {
  const [selectedValue, setSelectedValue] = useState('') // Giá trị mặc định là rỗng
  const [monthNow, setMonthNow] = useState('')
  const [orders, setOrders] = useState([]) // Biến để lưu giá trị đã chọn
  const handleChange = (event) => {
    const selectedMonth = event.target.value
    setSelectedValue(selectedMonth) // Cập nhật giá trị đã chọn vào state
    setMonthNow(selectedMonth) // Lưu giá trị đã chọn vào biến MonthNow
  }

  useEffect(() => {
    if (monthNow) {
      fetchOrdersByMonth(monthNow)
    }
  }, [monthNow])
  const fetchOrdersByMonth = async (selectedMonth) => {
    try {
      const response = await axios.get(`http://localhost:8081/api/orders/byMonth?month=${selectedMonth}`)
      setOrders(response.data) // Cập nhật danh sách đơn hàng
    } catch (error) {
      console.error('Error fetching orders by month:', error)
    }
  }
  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
      >
        <option value=''>Chọn Month</option>
        {[...Array(12).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>

      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Orders ID</th>
            <th className='px-4 py-2'>Address</th>
            <th className='px-4 py-2'>Date</th>
            <th className='px-4 py-2'>Status</th>
            <th className='px-4 py-2'>Phone Number</th>
            <th className='px-4 py-2'>Username</th>
            <th className='px-4 py-2'>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.ordersId} className='bg-gray-100'>
              <td className='border px-4 py-2 text-center'>{order.ordersId}</td>
              <td className='border px-4 py-2 text-center'>{order.address}</td>
              <td className='border px-4 py-2 text-center'>{order.date}</td>
              <td className='border px-4 py-2 text-center'>{order.status}</td>
              <td className='border px-4 py-2 text-center'>{order.phoneNumber}</td>
              <td className='border px-4 py-2 text-center'>{order.username}</td>
              <td className='border px-4 py-2 text-center'>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StatisticalAdmin
