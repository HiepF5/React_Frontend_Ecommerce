// Function to generate random UUID
import React, { useEffect, useState } from 'react'
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// Function to generate random product name
const generateProductName = () => {
  const brands = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Google', 'OnePlus', 'Sony']
  const models = ['Galaxy', 'iPhone', 'Redmi', 'P30', 'Pixel', 'One', 'Xperia']
  const brand = brands[Math.floor(Math.random() * brands.length)]
  const model = models[Math.floor(Math.random() * models.length)]
  return `${brand} ${model}`
}

// Function to generate random product category
const generateProductCategory = () => {
  const categories = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Google', 'Toys', 'Books']
  return categories[Math.floor(Math.random() * categories.length)]
}

// Function to generate random product price
const generateProductPrice = () => {
  return (Math.random() * 1000).toFixed(2)
}

// Function to generate random sold quantity
const generateSoldQuantity = () => {
  return Math.floor(Math.random() * 100)
}

// Function to generate random remaining quantity
const generateRemainingQuantity = () => {
  return Math.floor(Math.random() * 100)
}

// Component to display top selling products
const TopSellingProducts = () => {
  const [topProducts, setTopProducts] = useState([])

  useEffect(() => {
    const generateRandomProduct = () => {
      return {
        id: generateUUID(),
        name: generateProductName(),
        category: generateProductCategory(),
        price: generateProductPrice(),
        imageUrl: 'https://via.placeholder.com/150',
        soldQuantity: generateSoldQuantity(),
        remainingQuantity: generateRemainingQuantity()
      }
    }

    const fakeProducts = Array.from({ length: 8 }, generateRandomProduct)
    const sortedProducts = fakeProducts.sort((a, b) => b.soldQuantity - a.soldQuantity)
    setTopProducts(sortedProducts)
  }, [])

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Top Selling Products</h2>
      <ul>
        {topProducts.map((product) => (
          <li key={product.id} className='border-b border-gray-200 py-4'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-medium'>{product.name}</h3>
                <p className='text-sm text-gray-500'>Category: {product.category}</p>
              </div>
              <div>
                <span className='text-green-500 font-semibold'>Sold: {product.soldQuantity}</span>
                <span className='text-gray-500'>, Remaining: {product.remainingQuantity}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component hiển thị thông tin thống kê về khách hàng
const CustomerStatistics = () => {
  const generateVietnameseName = () => {
    const firstNameList = [
      'Nguyễn',
      'Trần',
      'Lê',
      'Phạm',
      'Hoàng',
      'Huỳnh',
      'Phan',
      'Vũ',
      'Đặng',
      'Bùi',
      'Đỗ',
      'Hồ',
      'Ngô',
      'Dương',
      'Lý'
    ]
    const middleNameList = [
      'Văn',
      'Thị',
      'Hữu',
      'Kim',
      'Thành',
      'Hải',
      'Thu',
      'Quốc',
      'Minh',
      'Tâm',
      'Như',
      'Hạnh',
      'Thúy',
      'Hoàng',
      'Tú'
    ]
    const lastNameList = [
      'An',
      'Bình',
      'Công',
      'Dũng',
      'Đức',
      'Hà',
      'Hải',
      'Hiền',
      'Hòa',
      'Hùng',
      'Linh',
      'Long',
      'Nam',
      'Phúc',
      'Quân'
    ]

    const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)]
    const middleName = middleNameList[Math.floor(Math.random() * middleNameList.length)]
    const lastName = lastNameList[Math.floor(Math.random() * lastNameList.length)]

    return `${firstName} ${middleName} ${lastName}`
  }
  // Giả mạo dữ liệu khách hàng
  const generateFakeCustomer = () => {
    return {
      id: generateUUID(),
      name: generateVietnameseName(), // Use generateVietnameseName() function to generate Vietnamese name
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
      gender: Math.random() < 0.5 ? 'Male' : 'Female',
      region: 'Region ' + generateUUID().substring(0, 8)
    }
  }

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    // Tạo dữ liệu giả mạo cho khách hàng
    const fakeCustomers = Array.from({ length: 20 }, generateFakeCustomer)
    setCustomers(fakeCustomers)
  }, [])

  // Tính tỷ lệ nam/nữ
  const maleCustomers = customers.filter((customer) => customer.gender === 'Male')
  const femaleCustomers = customers.filter((customer) => customer.gender === 'Female')
  const malePercentage = (maleCustomers.length / customers.length) * 100
  const femalePercentage = (femaleCustomers.length / customers.length) * 100

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Customer Statistics</h2>
      <div>Male: {malePercentage.toFixed(2)}%</div>
      <div>Female: {femalePercentage.toFixed(2)}%</div>
    </div>
  )
}

const ProductInventory = () => {
  // Giả mạo dữ liệu sản phẩm và số lượng tồn kho
  const generateFakeProductInventory = () => {
    return {
      id: generateUUID(),
      name: generateProductName(),
      soldQuantity: generateSoldQuantity(),
      remainingQuantity: generateRemainingQuantity()
    }
  }

  const [productInventory, setProductInventory] = useState([])

  useEffect(() => {
    // Tạo dữ liệu giả mạo cho sản phẩm và số lượng tồn kho
    const fakeProductInventory = Array.from({ length: 5 }, generateFakeProductInventory)
    setProductInventory(fakeProductInventory)
  }, [])

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Product Inventory</h2>
      <ul>
        {productInventory.map((product) => (
          <li key={product.id} className='border-b border-gray-200 py-4'>
            {product.name} - Sold: {product.soldQuantity}, Remaining: {product.remainingQuantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component hiển thị tổng doanh thu từng danh mục sản phẩm
const RevenueByCategory = () => {
  // Giả mạo dữ liệu danh mục sản phẩm và doanh thu
  const generateFakeRevenueByCategory = () => {
    return {
      id: generateUUID(),
      category: generateProductCategory(),
      revenue: (Math.random() * 10000).toFixed(2)
    }
  }

  const [revenueByCategory, setRevenueByCategory] = useState([])

  useEffect(() => {
    // Tạo dữ liệu giả mạo cho danh mục sản phẩm và doanh thu
    const fakeRevenueByCategory = Array.from({ length: 5 }, generateFakeRevenueByCategory)
    setRevenueByCategory(fakeRevenueByCategory)
  }, [])

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Revenue by Category</h2>
      <ul>
        {revenueByCategory.map((item) => (
          <li key={item.id} className='border-b border-gray-200 py-4'>
            {item.category} - Revenue: {item.revenue}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component hiển thị thông tin về đánh giá và phản hồi từ khách hàng
const CustomerFeedback = () => {
  const generateVietnameseName = () => {
    const firstNameList = [
      'Nguyễn',
      'Trần',
      'Lê',
      'Phạm',
      'Hoàng',
      'Huỳnh',
      'Phan',
      'Vũ',
      'Đặng',
      'Bùi',
      'Đỗ',
      'Hồ',
      'Ngô',
      'Dương',
      'Lý'
    ]
    const middleNameList = [
      'Văn',
      'Thị',
      'Hữu',
      'Kim',
      'Thành',
      'Hải',
      'Thu',
      'Quốc',
      'Minh',
      'Tâm',
      'Như',
      'Hạnh',
      'Thúy',
      'Hoàng',
      'Tú'
    ]
    const lastNameList = [
      'An',
      'Bình',
      'Công',
      'Dũng',
      'Đức',
      'Hà',
      'Hải',
      'Hiền',
      'Hòa',
      'Hùng',
      'Linh',
      'Long',
      'Nam',
      'Phúc',
      'Quân'
    ]

    const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)]
    const middleName = middleNameList[Math.floor(Math.random() * middleNameList.length)]
    const lastName = lastNameList[Math.floor(Math.random() * lastNameList.length)]

    return `${firstName} ${middleName} ${lastName}`
  }
  // Giả mạo dữ liệu đánh giá và phản hồi từ khách hàng
  const generateFakeFeedback = () => {
    return {
      id: generateUUID(),
      customerName: 'Customer ' + generateVietnameseName(),
      rating: Math.floor(Math.random() * 5) + 1,
      feedback: 'Feedback ' + generateUUID().substring(0, 8)
    }
  }

  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    // Tạo dữ liệu giả mạo cho đánh giá và phản hồi từ khách hàng
    const fakeFeedbacks = Array.from({ length: 8 }, generateFakeFeedback)
    setFeedbacks(fakeFeedbacks)
  }, [])

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Customer Feedback</h2>
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id} className='border-b border-gray-200 py-4'>
            {item.customerName} - Rating: {item.rating}, Feedback: {item.feedback}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component tổng hợp các tính năng
const FakeAdmin = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mb-8'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
        <div className='bg-red-200 p-4'>
          <TopSellingProducts />
        </div>
        <div className='bg-blue-200 p-4'>
          <CustomerStatistics />
        </div>
        <div className='bg-green-200 p-4'>
          <ProductInventory />
        </div>
        <div className='bg-yellow-200 p-4'>
          <RevenueByCategory />
        </div>
        <div className='bg-purple-200 p-4'>
          <CustomerFeedback />
        </div>
      </div>
    </div>
  )
}

export default FakeAdmin
