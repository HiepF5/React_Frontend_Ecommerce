import React, { useState, useEffect } from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiErrorWarningLine } from 'react-icons/ri'
import { CiMenuKebab } from 'react-icons/ci'
import { IoAdd } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import axios from 'axios'

const OrderAdmin = ({ handleOrderPopup }) => {
  const [ordersList, setOrdersList] = useState([])
  const [editOrderId, setEditOrderId] = useState(null)
  const [editedOrder, setEditedOrder] = useState({
    ordersId: '',
    address: '',
    date: '',
    status: 0,
    phoneNumber: '',
    username: '',
    total: 0
  })

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/orders')
      setOrdersList(response.data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8081/api/orders/${orderId}`)
      fetchOrders()
    } catch (error) {
      console.error('Error deleting order:', error)
    }
  }

  const handleEdit = (order) => {
    setEditOrderId(order.ordersId)
    setEditedOrder({ ...order })
  }

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:8081/api/orders/${editOrderId}`, editedOrder)
      fetchOrders()
      setEditOrderId(null)
    } catch (error) {
      console.error('Error updating order:', error)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-white gap-4 flex-col flex p-4 rounded-lg '>
        <div className='flex items-center '>
          <IoHomeSharp className='w-6 h-6 opacity-50' />
          <MdNavigateNext className='w-6 h-6 opacity-50' />
          <p className='text-[20px]'>Home</p>
          <MdNavigateNext className='w-6 h-6 opacity-50' />
          <p className='text-[16px]'>Order</p>
        </div>
        <div className='text-[30px] font-semibold'>All Orders</div>
        <div className='flex gap-3'>
          <div>
            <input className='border py-1 px-3 rounded-lg w-[380px]' type='text' placeholder='Search for orders' />
          </div>
          <div className='flex justify-between items-center w-full'>
            <div className='flex items-center gap-3'>
              <IoIosSettings className='w-6 h-6 opacity-50' />
              <RiDeleteBin6Line className='w-6 h-6 opacity-50' />
              <RiErrorWarningLine className='w-6 h-6 opacity-50' />
              <CiMenuKebab className='w-6 h-6 opacity-50' />
            </div>
            <div>
              <button className='flex items-center bg-red-500 px-2 py-1 rounded-md'>
                <IoAdd className='w-6 h-6 opacity-50 text-white' />
                <p className='text-white' onClick={handleOrderPopup}>
                  Add Order
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-5 rounded-lg h-full overflow-y-auto max-h-[400px]'>
        <table className='w-full border-collapse border border-slate-400 '>
          <thead className='text-center'>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th>Phone Number</th>
              <th>Username</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {ordersList.map((order, index) => (
              <tr key={index} className='border border-slate-300 odd:bg-white even:bg-slate-50'>
                <td>{index + 1}</td>
                <td>
                  {editOrderId === order.ordersId ? (
                    <input
                      className='w-full'
                      type='text'
                      value={editedOrder.address}
                      onChange={(e) => setEditedOrder({ ...editedOrder, address: e.target.value })}
                    />
                  ) : (
                    order.address
                  )}
                </td>
                <td>
                  {editOrderId === order.ordersId ? (
                    <input
                      className='w-full'
                      type='date'
                      value={editedOrder.date}
                      onChange={(e) => setEditedOrder({ ...editedOrder, date: e.target.value })}
                    />
                  ) : (
                    order.date
                  )}
                </td>
                <td>
                  {editOrderId === order.ordersId ? (
                    <input
                      className='w-full'
                      type='number'
                      value={editedOrder.status}
                      onChange={(e) => setEditedOrder({ ...editedOrder, status: e.target.value })}
                    />
                  ) : (
                    order.status
                  )}
                </td>
                <td>
                  {editOrderId === order.ordersId ? (
                    <input
                      className='w-full'
                      type='text'
                      value={editedOrder.phoneNumber}
                      onChange={(e) => setEditedOrder({ ...editedOrder, phoneNumber: e.target.value })}
                    />
                  ) : (
                    order.phoneNumber
                  )}
                </td>
                <td>
                  {editOrderId === order.ordersId ? (
                    <input
                      className='w-full'
                      type='text'
                      value={editedOrder.username}
                      onChange={(e) => setEditedOrder({ ...editedOrder, username: e.target.value })}
                    />
                  ) : (
                    order.username
                  )}
                </td>
                <td>
                  {editOrderId === order.ordersId ? (
                    <input
                      className='w-full'
                      type='number'
                      value={editedOrder.total}
                      onChange={(e) => setEditedOrder({ ...editedOrder, total: e.target.value })}
                    />
                  ) : (
                    order.total
                  )}
                </td>
                <td>
                  <div className='flex justify-around'>
                    {editOrderId === order.ordersId ? (
                      <button className='bg-green-500 text-white px-2 py-1 rounded-lg' onClick={handleSaveEdit}>
                        Save
                      </button>
                    ) : (
                      <button
                        className='bg-sky-400 text-white mx-2 px-2 py-1 rounded-lg'
                        onClick={() => handleEdit(order)}
                      >
                        <AiOutlineEdit className='w-6 h-6 opacity-50' />
                      </button>
                    )}
                    <button
                      className='bg-red-500 text-white mx-2 px-2 py-1 rounded-lg'
                      onClick={() => handleDelete(order.ordersId)}
                    >
                      <MdDeleteOutline className='w-6 h-6 opacity-50' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderAdmin
