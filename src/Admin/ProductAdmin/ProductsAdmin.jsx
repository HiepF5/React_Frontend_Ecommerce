import React, { useRef, useState } from 'react'
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
import { toast } from 'react-toastify'
import { CSVLink, CSVDownload } from 'react-csv'
import import_ex from '../../assets/import.svg'
import save from '../../assets/save.svg'
import papa from 'papaparse'
import ReportProduct from '../../Report/ReportProduct'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import jsPDF from 'jspdf'
import ChartReport from '../../Report/ChartReport'
const ProductsAdmin = ({ handleOrderPopup }) => {
  const [showPDF, setShowPDF] = useState(false)
  // const [data, setData] = useState([
  //   { id: 1, name: 'Product 1', price: 100 },
  //   { id: 2, name: 'Product 2', price: 200 },
  //   { id: 3, name: 'Product 3', price: 300 }
  // ])
  const pdfRef = useRef(null)
  const handleExportPDF = () => {
    setShowPDF(true)
  }
  const productsList = useProducts((state) => state.productsList)
  const setProductsList = useProducts((state) => state.setProductsList)
  const [dataExport, setDataExport] = useState([])
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
      toast.success('Edit success')
      setEditProductId(null)
    } catch (error) {
      console.error('Error updating product:', error)
      toast.error('Edit Error')
    }
  }
  const getUsersExport = (event, done) => {
    let result = []
    if (productsList && productsList.length > 0) {
      result.push(['Id', 'Name', 'Image', 'Price', 'Quantity', 'Sold', 'Brand', 'Description'])
      productsList.map((item, index) => {
        let arr = []
        arr[0] = item.productsId
        arr[1] = item.productName
        arr[2] = item.image
        arr[3] = item.price
        arr[4] = item.quantity
        arr[5] = item.sold
        arr[6] = item.brand
        arr[7] = item.description
        result.push(arr)
      })
      setDataExport(result)
      done()
    }
  }
  const handleImportCSV = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      let file = event.target.files[0]
      if (file.type !== 'text/csv') {
        toast.error('Please upload a csv file')
        return
      }
      papa.parse(file, {
        complete: function (result) {
          let rawCSV = result.data
          console.log(
            rawCSV[0][0],
            rawCSV[0][7],
            rawCSV[0][1],
            rawCSV[0][2],
            rawCSV[0][3],
            rawCSV[0][4],
            rawCSV[0][5],
            rawCSV[0][6],
            rawCSV[0]
          )
          if (rawCSV.length > 0) {
            if (rawCSV[0].length === 8) {
              if (
                rawCSV[0][0] !== 'Id' ||
                rawCSV[0][1] !== 'Name' ||
                rawCSV[0][2] !== 'Image' ||
                rawCSV[0][3] !== 'Price' ||
                rawCSV[0][4] !== 'Quantity' ||
                rawCSV[0][5] !== 'Sold' ||
                rawCSV[0][6] !== 'Brand' ||
                rawCSV[0][7] !== 'Description'
              ) {
                toast.error('Please upload format Header csv file')
                return
              } else {
                let result = []
                rawCSV.map((item, index) => {
                  console.log('Item', item)
                  if (index > 0 && item.length === 8) {
                    let arr = {}
                    arr.productsId = item[0]
                    arr.productName = item[1]
                    arr.image = item[2]
                    arr.price = item[3]
                    arr.quantity = item[4]
                    arr.sold = item[5]
                    arr.brand = item[6]
                    arr.description = item[7]
                    result.push(arr)
                    console.log(result)
                  }
                })
                // chưa post lên db
                setProductsList(result)
              }
            } else {
              toast.error('Please format csv file')
            }
          } else {
            toast.error('Not found data csv file')
          }
        }
      })
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
        <div className='flex gap-3 items-center'>
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
            <div className='flex items-center gap-4'>
              <button className='flex items-center bg-red-500 px-2 py-1 rounded-md'>
                <IoAdd className='w-6 h-6 opacity-50 text-white' />
                <p className='text-white' onClick={handleOrderPopup}>
                  Add product
                </p>
              </button>
              <label htmlFor='import_ex' className=' flex' style={{ backgroundColor: 'red', padding: '0.5rem' }}>
                <img style={{ height: '1.25rem', marginBottom: '4px', marginRight: '6px' }} src={import_ex} />
                <p> Import</p>
              </label>
              <input type='file' hidden id='import_ex' onChange={(event) => handleImportCSV(event)} />

              <CSVLink
                data={dataExport}
                filename={'my-file.csv'}
                target='_blank'
                className='m-2 flex'
                asyncOnClick={true}
                onClick={getUsersExport}
                style={{ backgroundColor: 'green', padding: '0.5rem' }} // Thêm style cho màu nền xanh lá cho nút export
              >
                <img style={{ height: '1.25rem', marginBottom: '4px', marginRight: '6px' }} src={save} />
                <p>Export</p>
              </CSVLink>
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
                      <button className='bg-sky-400 mx-2 px-2 py-1 rounded-lg' onClick={() => handleEdit(pr)}>
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
      <button
        onClick={handleExportPDF}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Xuất Report Thống kê Sản Phẩm
      </button>
      {showPDF && (
        <>
          <PDFViewer width='1000' height='600' ref={pdfRef}>
            <ReportProduct productsList={productsList} />
          </PDFViewer>
          <PDFDownloadLink document={<ReportProduct productsList={productsList} />} fileName='report.pdf'>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </>
      )}
    </div>
  )
}

export default ProductsAdmin
