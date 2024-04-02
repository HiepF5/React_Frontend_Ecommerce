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

function App() {
  const fetch = useAllProduct((state) => state.fetch)
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
          <Route path='/product' element={<ProductDetail />}>
            <Route path=':productId' element={<ProductDetail />} />
          </Route>
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/rePassword' element={<RePassword />} />
          <Route path='/productList' element={<ProductsList />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
