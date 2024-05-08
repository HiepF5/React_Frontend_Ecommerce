import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import RePassword from './pages/RePassword'
import CheckEmail from './pages/CheckEmail'
import Verification from './pages/Verification'
import CreatePassword from './pages/CreatePassword'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import { useAllProduct } from './Store/AllProductStore'
import { useEffect } from 'react'
import ProductsPageAdmin from './Admin/ProductAdmin/ProductsPageAdmin'
import DashboardPageAdmin from './Admin/Dashboard/DashboardPageAdmin'
import { useProducts } from './Store/ProductsStore'

function App() {
  const fetch = useProducts((state) => state.fetch)
  useEffect(() => {
    fetch('http://localhost:8081/api/products')
  }, [])
  // const fetch = useAllProduct((state) => state.fetch)
  useEffect(() => {
    fetch('http://localhost:5000/all_products')
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpassword' element={<CreatePassword />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/checkemail' element={<CheckEmail />} />
          <Route path='/iphone' element={<ProductsList category='Iphone' />} />
          <Route path='/samsung' element={<ProductsList category='Samsung' />} />
          <Route path='/xiaomi' element={<ProductsList category='Xiaomi' />} />
          <Route path='/nokia' element={<ProductsList category='Nokia' />} />
          <Route path='/oppo' element={<ProductsList category='Oppo' />} />
          <Route path='/product' element={<ProductDetail />}>
            <Route path=':productId' element={<ProductDetail />} />
          </Route>
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/rePassword' element={<RePassword />} />
          <Route path='/productList' element={<ProductsList />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/admin' element={<DashboardPageAdmin />} />
          <Route path='/admin/product' element={<ProductsPageAdmin />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
