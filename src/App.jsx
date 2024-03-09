import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<Home />} />
          <Route path='/womens' element={<Home />} />
          <Route path='/kids' element={<Home />} />
          <Route path='/product' element={<Home />}>
            <Route path=':productId' element={<Home />} />
          </Route>
          <Route path='/cart' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
