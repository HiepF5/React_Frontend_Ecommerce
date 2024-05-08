import React, { useState } from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiErrorWarningLine } from 'react-icons/ri'
import { CiMenuKebab } from 'react-icons/ci'
import { IoAdd } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { useProducts } from '../../Store/ProductsStore'
import axios from 'axios'
const ProductsAdmin = ({ handleOrderPopup }) => {
  const productsList = useProducts((state) => state.productsList)
  const { fetch } = useProducts()

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8081/api/products/${productId}`)
      await fetch('http://localhost:8081/api/products')
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }
  const [editProductId, setEditProductId] = useState(null)
  const [editedProduct, setEditedProduct] = useState({
    productName: '',
    price: 0,
    quantity: 0,
    sold: 0, // Thêm trường sold vào state
    brand: '', // Thêm trường brand vào state
    description: '' // Thêm trường description vào state
    // Add other fields as needed
  })

  const handleEdit = (product) => {
    setEditProductId(product.productsId)
    setEditedProduct({ ...product })
  }

  const handleSaveEdit = async () => {
    console.log(editedProduct)
    try {
      await axios.put(`http://localhost:8081/api/products/${editProductId}`, editedProduct)
      await fetch('http://localhost:8081/api/products')
      setEditProductId(null)
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  console.log(productsList)
  return (
    <div className=' flex flex-col gap-4'>
      <div className='bg-white gap-4 flex-col flex p-4 rounded-lg '>
        <div className='flex items-center '>
          <IoHomeSharp className='w-6 h-6 opacity-50' />
          <MdNavigateNext className='w-6 h-6 opacity-50' />
          <p className='text-[20px]'>Home</p>
          <MdNavigateNext className='w-6 h-6 opacity-50' />
          <p className='text-[16px]'>Products</p>
        </div>
        <div className='text-[30px] font-semibold'>All Products</div>
        <div className='flex gap-3'>
          <div>
            <input className='border py-1 px-3 rounded-lg w-[380px]' type='text' placeholder='Search for products' />
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
                  Add product
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
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sold</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {productsList.map((pr, index) => (
              <tr key={index} className='border border-slate-300 odd:bg-white even:bg-slate-50'>
                <td>{pr.productsId}</td>
                <td>
                  {editProductId === pr.productsId ? (
                    <input
                      className='w-full'
                      type='text'
                      value={editedProduct.productsName}
                      onChange={(e) => setEditedProduct({ ...editedProduct, productsName: e.target.value })}
                    />
                  ) : (
                    pr.productsName
                  )}
                </td>
                <td className='flex justify-center p-2'>
                  <img className='w-[100px] h-[100px]' src={pr.image} alt='' />
                </td>
                <td>
                  {editProductId === pr.productsId ? (
                    <input
                      className='w-full'
                      type='number'
                      value={editedProduct.price}
                      onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                    />
                  ) : (
                    pr.price
                  )}
                </td>
                <td>
                  {editProductId === pr.productsId ? (
                    <input
                      className='w-full'
                      type='number'
                      value={editedProduct.quantity}
                      onChange={(e) => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
                    />
                  ) : (
                    pr.quantity
                  )}
                </td>
                <td>
                  {editProductId === pr.productsId ? (
                    <input
                      className='w-full'
                      type='number'
                      value={editedProduct.sold}
                      onChange={(e) => setEditedProduct({ ...editedProduct, sold: e.target.value })}
                    />
                  ) : (
                    pr.sold
                  )}
                </td>
                <td>
                  {editProductId === pr.productsId ? (
                    <input
                      className='w-full'
                      type='text'
                      value={editedProduct.brand}
                      onChange={(e) => setEditedProduct({ ...editedProduct, brand: e.target.value })}
                    />
                  ) : (
                    pr.brand
                  )}
                </td>
                <td>
                  {editProductId === pr.productsId ? (
                    <input
                      type='text'
                      value={editedProduct.description}
                      onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                    />
                  ) : (
                    pr.description
                  )}
                </td>
                {/* Render other fields similarly */}
                <td>
                  <div className='flex justify-around'>
                    {editProductId === pr.productsId ? (
                      <button className='bg-green-500 text-white px-2 py-1 rounded-lg' onClick={handleSaveEdit}>
                        Save
                      </button>
                    ) : (
                      <button
                        className='bg-sky-400 text-white mx-2 px-2 py-1 rounded-lg'
                        onClick={() => handleEdit(pr)}
                      >
                        <AiOutlineEdit className='w-6 h-6 opacity-50' />
                      </button>
                    )}
                    <button
                      className='bg-red-500 text-white mx-2 px-2 py-1 rounded-lg'
                      onClick={() => handleDelete(pr.productsId)}
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

export default ProductsAdmin
