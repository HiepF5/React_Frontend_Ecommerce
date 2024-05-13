import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { CiShoppingTag } from 'react-icons/ci'
import { FaCartArrowDown } from 'react-icons/fa'
import { CiUser } from 'react-icons/ci'
import { FaUserCheck } from 'react-icons/fa'
import axios from 'axios'

function DashboardAdmin() {
  const [ordersData, setOrdersData] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchTop5Users = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/user/top5count')
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching top 5 users:', error)
      }
    }

    fetchTop5Users()
  }, [])
  const [top1month, setTop1month] = useState([])

  useEffect(() => {
    const fetchTop1Month = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/orders/month-with-most-orders')
        setTop1month(response.data)
      } catch (error) {
        console.error('Error fetching top 5 users:', error)
      }
    }

    fetchTop1Month()
  }, [])
  const [totalOrders, setTotalOrders] = useState(0)

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/orders/count')
      .then((response) => {
        setTotalOrders(response.data)
      })
      .catch((error) => {
        console.error('Error fetching total orders:', error)
      })
  }, [])
  const [totalTotalOrderAmount, setTotalTotalOrderAmount] = useState(0)

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/orders/totalAmount')
      .then((response) => {
        setTotalTotalOrderAmount(response.data)
      })
      .catch((error) => {
        console.error('Error fetching total orders:', error)
      })
  }, [])
  const [countUser, setCountUser] = useState(0)

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/user/total')
      .then((response) => {
        setCountUser(response.data)
      })
      .catch((error) => {
        console.error('Error fetching total orders:', error)
      })
  }, [])

  useEffect(() => {
    // Gọi API để lấy dữ liệu đơn hàng cho mỗi tháng từ tháng 1 đến tháng 12
    const fetchData = async () => {
      const data = []
      for (let i = 1; i <= 12; i++) {
        try {
          const response = await axios.get(`http://localhost:8081/api/orders/byMonth?month=${i}`)
          data.push(...response.data)
        } catch (error) {
          console.error(`Error fetching orders data for month ${i}:`, error)
        }
      }
      setOrdersData(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    // Khởi tạo biểu đồ khi dữ liệu đơn hàng thay đổi
    const ctx = document.getElementById('chart-line')
    if (ctx) {
      Chart.getChart(ctx)?.destroy()
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Doanh thu',
              data: aggregateDataByMonth(ordersData), // Tổng hợp dữ liệu từ tất cả các tháng
              borderColor: '#36a2eb',
              fill: false
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          }
        }
      })
    }

    // Khởi tạo biểu đồ đơn hàng
    const ctx2 = document.getElementById('chart-bars')
    if (ctx2) {
      Chart.getChart(ctx2)?.destroy()
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Đơn hàng',
              data: aggregateOrdersByMonth(ordersData), // Tổng hợp số đơn hàng từ tất cả các tháng
              backgroundColor: '#ff6384'
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          }
        }
      })
    }
  }, [ordersData])

  // Hàm để tổng hợp dữ liệu doanh thu từ tất cả các tháng
  const aggregateDataByMonth = (data) => {
    const aggregatedData = new Array(12).fill(0)
    data.forEach((order) => {
      const month = new Date(order.date).getMonth()
      aggregatedData[month] += order.total
    })
    return aggregatedData
  }

  // Hàm để tổng hợp số đơn hàng từ tất cả các tháng
  const aggregateOrdersByMonth = (data) => {
    const aggregatedOrders = new Array(12).fill(0)
    data.forEach((order) => {
      const month = new Date(order.date).getMonth()
      aggregatedOrders[month] += 1
    })
    return aggregatedOrders
  }

  return (
    <div className='container mx-auto'>
      <div className='bg-gray-100'>
        <div className='px-4 py-6'>
          <div className=' text-2xl text-light'>Thống kê</div>
          <div className='grid grid-cols-12 gap-4 mt-4'>
            <div className='col-span-3 bg-white p-4 rounded-md'>
              <div className='flex items-center gap-2'>
                <CiShoppingTag />
                <div>Doanh số</div>
              </div>
              <div className='flex flex-col mt-2'>
                <b className='text-dark'>{totalTotalOrderAmount} VNĐ</b>
              </div>
            </div>
            <div className='col-span-3 bg-white p-4 rounded-md'>
              <div className='flex items-center gap-2'>
                <FaCartArrowDown />
                <div>Tổng số đơn</div>
              </div>
              <div className='flex flex-col mt-2'>
                <b className='text-dark'>{totalOrders}</b>
              </div>
            </div>
            <div className='col-span-3 bg-white p-4 rounded-md'>
              <div className='flex items-center gap-2'>
                <CiUser />
                <div>Khách hàng</div>
              </div>
              <div className='flex flex-col mt-2'>
                <b className='text-dark'>{countUser}</b>
              </div>
            </div>
            <div className='col-span-3 bg-white p-4 rounded-md'>
              <div className='flex items-center gap-2'>
                <FaUserCheck />
                <div>Tháng nhiều đơn nhất</div>
              </div>
              <div className='flex flex-col mt-2'>
                <b className='text-dark'>{top1month}</b>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-6'>
          <div className=' pb-4'>
            <div className='text-2xl pb-0'>
              <h6>Doanh thu</h6>
            </div>
            <div className='bg-white p-3'>
              <div className='chart'>
                <canvas id='chart-line' className='chart-canvas' height={300}></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-6'>
          <div className=' pb-4'>
            <div className='text-2xl pb-0'>
              <h6>Đơn Hàng</h6>
            </div>
            <div className='bg-white p-3'>
              <div className='bg-gradient-dark rounded-lg py-3 px-1 mb-3'>
                <div className='chart'>
                  <canvas id='chart-bars' className='chart-canvas' height={170}></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-6'>
          <div className='overflow-x-auto'>
            <table className='table-auto min-w-full'>
              <thead>
                <tr className='bg-white'>
                  <th className='px-4 py-2'>STT</th>
                  <th className='px-4 py-2'>Full Name</th>
                  <th className='px-4 py-2'>Email</th>
                  <th className='px-4 py-2'>Phone Number</th>
                  <th className='px-4 py-2'>Address</th>
                  <th className='px-4 py-2'>Total Order</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {users.map((user, index) => (
                  <tr key={user.userId}>
                    <td className='border px-4 py-2 text-center'>{index + 1}</td>
                    <td className='border px-4 py-2 text-center'>{user.fullName}</td>
                    <td className='border px-4 py-2 text-center'>{user.email}</td>
                    <td className='border px-4 py-2 text-center'>{user.phoneNumber}</td>
                    <td className='border px-4 py-2 text-center'>{user.address}</td>
                    <td className='border px-4 py-2 text-center'>{user.total_order}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin
