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
import { useEffect } from 'react'
import ProductsPageAdmin from './Admin/ProductAdmin/ProductsPageAdmin'
import DashboardPageAdmin from './Admin/DashboardAdmin/DashboardPageAdmin'
import { useProducts } from './Store/ProductsStore'
import OrderPageAdmin from './Admin/OrderAdmin.jsx/OrderPageAdmin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StatisticalPageAdmin from './Admin/StatisticalAdmin/StatisticalPageAdmin'
import KpiPageAdmin from './Admin/KpiAdmin/KpiPageAdmin'
import FakeAdmin from './Admin/fakeAdmin/FakeAdmin'
import FakePageAdmin from './Admin/fakeAdmin/fakePageAdmin'
function App() {
  const fetch = useProducts((state) => state.fetch)
  useEffect(() => {
    fetch('http://localhost:8081/api/products')
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<ProductsList category={''} />} /> */}
          <Route path='/createpassword' element={<CreatePassword />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/checkemail' element={<CheckEmail />} />
          <Route path='/iphone' element={<ProductsList category='Iphone' />} />
          <Route path='/samsung' element={<ProductsList category='SamSung' />} />
          <Route path='/xiaomi' element={<ProductsList category='Xiaomi' />} />
          <Route path='/nokia' element={<ProductsList category='Nokia' />} />
          <Route path='/oppo' element={<ProductsList category='Oppo' />} />
          <Route path='/shop' element={<ProductsList category={''} />} />
          <Route path='/product' element={<ProductDetail />}>
            <Route path=':productId' element={<ProductDetail />} />
          </Route>
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/rePassword' element={<RePassword />} />
          <Route path='/cart' element={<CartPage />} />
          {/* router admin */}
          <Route path='/admin' element={<DashboardPageAdmin />} />
          <Route path='/admin/product' element={<ProductsPageAdmin />} />
          <Route path='/admin/order' element={<OrderPageAdmin />} />
          <Route path='/admin/statistical' element={<StatisticalPageAdmin />} />
          <Route path='/admin/kpi' element={<KpiPageAdmin />} />
          <Route path='/admin/selling' element={<FakePageAdmin />} />
          {/* end admin */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
