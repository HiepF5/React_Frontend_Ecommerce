import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useKpi } from '../../Store/KpiStore'

const KpiAdmin = () => {
  const {
    top5Users,
    top1Month,
    totalOrders,
    totalOrderAmount,
    countUser,
    ordersData,
    productQuantities,
    fetchTop5Users,
    fetchTop1Month,
    fetchTotalOrders,
    fetchTotalOrderAmount,
    fetchCountUser,
    fetchOrdersData,
    fetchProductQuantities
  } = useKpi((state) => ({
    top5Users: state.top5Users,
    top1Month: state.top1Month,
    totalOrders: state.totalOrders,
    totalOrderAmount: state.totalOrderAmount,
    countUser: state.countUser,
    ordersData: state.ordersData,
    productQuantities: state.productQuantities,
    fetchTop5Users: state.fetchTop5Users,
    fetchTop1Month: state.fetchTop1Month,
    fetchTotalOrders: state.fetchTotalOrders,
    fetchTotalOrderAmount: state.fetchTotalOrderAmount,
    fetchCountUser: state.fetchCountUser,
    fetchOrdersData: state.fetchOrdersData,
    fetchProductQuantities: state.fetchProductQuantities
  }))

  const [exceededThreshold, setExceededThreshold] = useState(false) // State để theo dõi trạng thái cảnh báo

  useEffect(() => {
    fetchTop5Users()
    fetchTop1Month()
    fetchTotalOrders()
    fetchTotalOrderAmount()
    fetchCountUser()
    fetchOrdersData()
    fetchProductQuantities()
    fetchProductQuantities()
  }, [
    fetchTop5Users,
    fetchTop1Month,
    fetchTotalOrders,
    fetchTotalOrderAmount,
    fetchCountUser,
    fetchOrdersData,
    fetchProductQuantities
  ])

  // Định nghĩa ngưỡng cho các KPI
  const thresholdTop5Users = 10
  const thresholdTotalOrders = 500
  const thresholdTotalOrderAmount = 1000000000000

  useEffect(() => {
    const interval = setInterval(() => {
      if (top5Users.length < thresholdTop5Users) {
        toast.warning(`Users chưa đạt ${thresholdTop5Users} đơn hàng.`)
        setExceededThreshold(true) // Cập nhật trạng thái cảnh báo khi chưa đạt ngưỡng
      }
      if (totalOrders < thresholdTotalOrders) {
        toast.warning(`Tổng số đơn hàng chưa đạt ${thresholdTotalOrders}.`)
        setExceededThreshold(true) // Cập nhật trạng thái cảnh báo khi chưa đạt ngưỡng
      }
      if (totalOrderAmount < thresholdTotalOrderAmount) {
        toast.warning(`Tổng số tiền đơn hàng chưa đạt $${thresholdTotalOrderAmount}.`)
        setExceededThreshold(true) // Cập nhật trạng thái cảnh báo khi chưa đạt ngưỡng
      }
    }, 5000) // Kiểm tra mỗi 5 giây nếu nó nhỏ hơn ngưỡng thì show toast
    return () => clearInterval(interval)
  }, [top5Users, totalOrders, totalOrderAmount])

  useEffect(() => {
    if (!exceededThreshold) {
      setExceededThreshold(false) // Reset lại trạng thái cảnh báo sau mỗi lần kiểm tra
    }
  }, [exceededThreshold])
  return (
    <div className='container'>
      <h2>KPI</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='border p-4 col-span-2 bg-gradient-to-r from-blue-400 to-green-400'>
          <h3>Top 5 Users</h3>
          <table className='w-full table-auto mt-4'>
            <thead>
              <tr>
                <th className='px-4 py-2'>User ID</th>
                <th className='px-4 py-2'>Full Name</th>
                <th className='px-4 py-2'>Total Orders</th>
              </tr>
            </thead>
            <tbody>
              {top5Users.map((user, index) => (
                <tr key={user.id}>
                  <td className='border px-4 py-2 text-center'>{index + 1}</td>
                  <td className='border px-4 py-2 text-center'>{user.fullName}</td>
                  <td className='border px-4 py-2 text-center'>{user.total_order}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='border p-4 bg-gradient-to-r from-purple-400 to-pink-400'>
          <h3 className='text-white'>Top Month with Most Orders</h3>
          <p className='text-white'>{top1Month}</p>
        </div>
        <div className='border p-4 bg-gradient-to-r from-blue-400 to-green-400'>
          <h3 className='text-white'>Total Orders</h3>
          <p className='text-white'>{totalOrders}</p>
        </div>
        <div className='border p-4 bg-gradient-to-r from-yellow-400 to-red-400'>
          <h3 className='text-white'>Total Order Amount</h3>
          <p className='text-white'>{totalOrderAmount}</p>
        </div>
        <div className='border p-4 bg-gradient-to-r from-indigo-400 to-purple-400'>
          <h3 className='text-white'>Total Users</h3>
          <p className='text-white'>{countUser}</p>
        </div>

        <div className='border p-4 col-span-2 bg-gradient-to-r from-yellow-400 to-pink-400'>
          <h3>Orders Data</h3>
          <table className='w-full table-auto mt-4'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Order ID</th>
                <th className='px-4 py-2'>Date</th>
                <th className='px-4 py-2'>Total</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.slice(0, 10).map((order, index) => (
                <tr key={order.id}>
                  <td className='border px-4 py-2 text-center'>{index + 1}</td>
                  <td className='border px-4 py-2 text-center'>{order.date}</td>
                  <td className='border px-4 py-2 text-center'>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='border p-4 col-span-2 bg-gradient-to-r from-purple-400 to-indigo-400'>
          <h3>Top 10 Best Selling Products</h3>
          <table className='w-full table-auto mt-4'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Product Image</th>
                <th className='px-4 py-2'>Product Name</th>
                <th className='px-4 py-2'>Quantity Sold</th>
              </tr>
            </thead>
            <tbody>
              {productQuantities.slice(0, 10).map((product) => (
                <tr key={product[0]}>
                  <td className='border px-4 py-2 text-center'>
                    <img src={product[2]} alt={product[1]} className='w-16 h-16 object-cover' />
                  </td>
                  <td className='border px-4 py-2 text-center'>{product[1]}</td>
                  <td
                    className='border px-4 py-2 text-center
'
                  >
                    {product[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default KpiAdmin
