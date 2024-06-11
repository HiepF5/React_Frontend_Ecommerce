import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { toast } from 'react-toastify'
import Mds from '../Mds/Mds'

const PrintComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>Danh sách Đơn đặt hàng</h1>
    {/* Danh sách sản phẩm của bạn */}
    <table className='w-full table-auto mt-4'>
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
        {props.orders.map((order) => (
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
))

const StatisticalAdmin = () => {
  const [selectedValue, setSelectedValue] = useState('') // Giá trị mặc định là rỗng
  const [monthNow, setMonthNow] = useState('')
  const [orders, setOrders] = useState([]) // Biến để lưu giá trị đã chọn
  const printRef = useRef()
  const [showMds, setShowMds] = useState(false)

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

      // Kiểm tra số lượng đơn hàng trong tháng
      if (response.data.length < 15) {
        toast.warning('KPI chưa đủ')
        setShowMds(true)
      }
      if (response.data.length > 15) {
        toast.success('KPI Đạt chỉ tiêu')
      }
    } catch (error) {
      console.error('Error fetching orders by month:', error)
    }
  }

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  })

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
      <table className='w-full table-auto mt-4'>
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
          <tr>
            <td colSpan='6' className='border px-4 py-2 text-right font-bold'>
              Total Orders:
            </td>
            <td className='border px-4 py-2 text-center'>{orders.length}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handlePrint}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
      >
        Print
      </button>
      <div style={{ display: 'none' }}>
        <PrintComponent ref={printRef} orders={orders} />
      </div>
      {showMds && <Mds />}
    </div>
  )
}

export default StatisticalAdmin
