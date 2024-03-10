import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import RePassword from './pages/RePassword'
import CheckEmail from './pages/CheckEmail'
import Verification from './pages/Verification'
import CreatePassword from './pages/CreatePassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpassword' element={<CreatePassword />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/checkemail' element={<CheckEmail />} />
          <Route path='/product' element={<Home />}>
            <Route path=':productId' element={<Home />} />
          </Route>
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/rePassword' element={<RePassword />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
