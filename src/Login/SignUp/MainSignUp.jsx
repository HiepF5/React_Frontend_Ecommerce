import React, { useState } from 'react'
import In_2 from '../../assets/SignInImg/In_2.png'
import GG from '../../assets/SignInImg/Google.png'
import TW from '../../assets/SignInImg/twitter.png'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const MainSignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    subscribeNewsletter: false
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    const response = await fetch('http://localhost:8081/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        address: 'Hưng yên',
        email: formData.email,
        fullName: 'New Customer',
        phoneNumber: '0975251857',
        password: formData.password
      })
    })

    const data = await response.json()
    console.log(data)
    toast.success('Bạn đăng kí thành công')
    navigate('/login')
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_2} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left'>Sign Up</h1>
            <span className='text-left text-gray-400/95'>Sign up for free to access any of our products</span>
            <div className='flex items-center gap-x-3 border-2 rounded px-32 py-2 border-gray-600/40'>
              <img src={GG} alt='' />
              <button className='text-[#8A33FD]'>Continue With Google</button>
            </div>
            <div className='flex items-center gap-x-3 border-2 rounded px-32 py-2 border-gray-600/40'>
              <img src={TW} alt='' />
              <button className='text-[#8A33FD]'>Continue With Twitter</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col text-left pt-8 gap-2'>
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  placeholder='designer@gmail.com'
                  className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
                />
              </div>
              <div className='flex flex-col text-left pt-8 gap-2'>
                <label>Email Address</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='designer@gmail.com'
                  className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
                />
              </div>
              <div className='flex flex-col text-left gap-2'>
                <div className='flex justify-between items-center'>
                  <label>Password</label>
                  <div
                    className='flex justify-between items-center gap-2 text-gray-400 cursor-pointer'
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                    <span>{showPassword ? 'Hide' : 'Show'}</span>
                  </div>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
                />
              </div>
              <div className='flex flex-col text-left gap-2'>
                <div className='flex justify-between items-center'>
                  <label>Confirm Password</label>
                  <div
                    className='flex justify-between items-center gap-2 text-gray-400 cursor-pointer'
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                    <span>{showPassword ? 'Hide' : 'Show'}</span>
                  </div>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
                />
              </div>
              <div className='text-left'>
                <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                <div className='flex items-center gap-2'>
                  <input
                    id='a'
                    name='agreeTerms'
                    type='checkbox'
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className='h-4 w-4 accent-pink-500'
                  />
                  <label htmlFor='a'>Agree to our Terms of use and Privacy Policy</label>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    id='s'
                    name='subscribeNewsletter'
                    type='checkbox'
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                    className='h-4 w-4 accent-pink-500'
                  />
                  <label htmlFor='s'>Subscribe to our monthly newsletter</label>
                </div>
              </div>
              <div className='text-left'>
                <button type='submit' className='border rounded bg-[#8A33FD] text-white px-8 p-2'>
                  Sign Up
                </button>
                <p>Already have an account? Log in</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSignUp
