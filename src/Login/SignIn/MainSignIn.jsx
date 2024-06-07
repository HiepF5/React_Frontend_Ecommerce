import React, { useState } from 'react'
import axios from 'axios'
import In_1 from '../../assets/SignInImg/In_1.png'
import GG from '../../assets/SignInImg/Google.png'
import TW from '../../assets/SignInImg/twitter.png'
import { FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../../Store/UsersStore'
import { useProducts } from '../../Store/ProductsStore'

const MainSignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const setUserData = useUsers((state) => state.setUserData)
  const setCheckLogin = useProducts((state) => state.setCheckLogin)
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8081/auth/login', {
        username,
        password
      })
      console.log(response.data)
      setUserData(response.data)
      setCheckLogin()
      // Handle successful login, e.g., redirect to another page or update UI
      navigate('/')
    } catch (error) {
      console.error('Error logging in:', error)
      // Handle error, e.g., display an error message
    }
  }

  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_1} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left pb-6'>Sign In Page</h1>
            <div className='flex items-center gap-x-3 border-2 rounded px-32 py-2 border-gray-600/40'>
              <img src={GG} alt='' />
              <button className='text-[#8A33FD]'>Continue With Google</button>
            </div>
            <div className='flex items-center gap-x-3 border-2 rounded px-32 py-2 border-gray-600/40'>
              <img src={TW} alt='' />
              <button className='text-[#8A33FD]'>Continue With Twitter</button>
            </div>
            <form onSubmit={handleLogin}>
              <div className='flex flex-col text-left'>
                <span>User name or email address</span>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
                />
              </div>
              <div className='flex flex-col text-left '>
                <div className='flex justify-between items-center'>
                  <span>Password</span>
                  <div
                    className='flex justify-between items-center gap-2 text-gray-400 cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FaEyeSlash />
                    <span>{showPassword ? 'Hide' : 'Show'}</span>
                  </div>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
                />
              </div>
              <div className='text-right'>
                <p className='underline'>Forgot your password?</p>
              </div>
              <div className='text-left'>
                <button type='submit' className='border rounded bg-[#8A33FD] text-white px-8 p-2'>
                  Sign In
                </button>
                <p>Don’t have an account? Sign up</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSignIn
