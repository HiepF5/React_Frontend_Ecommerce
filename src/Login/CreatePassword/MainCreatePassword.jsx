import React from 'react'
import In_6 from '../../assets/SignInImg/In_6.png'
import { IoIosArrowBack } from 'react-icons/io'
import { FaEyeSlash } from 'react-icons/fa6'
const MainCreatePassword = () => {
  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_6} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left '>Create New Password</h1>
            <span className='text-left text-gray-400/95'>
              Your new password must be different from previous used passwords.
            </span>

            <div className='flex flex-col text-left'>
              <span>Password</span>
              <div className='border rounded border-gray-300 outline-none flex justify-between items-center'>
                <input type='password' placeholder='******' className='h-12 px-4  text-gray-700 text-lg' />
                <FaEyeSlash />
              </div>
              <span className='text-gray-400/95'>Must be at least 8 characters</span>
            </div>
            <div className='flex flex-col text-left '>
              <div className='flex justify-between items-center'>
                <span>Confirm Password</span>
              </div>
              <input
                type='password'
                placeholder='******'
                className='h-12 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
              />
              <span className='text-red-400/95'>New Password and confirm new password do not match</span>
            </div>

            <div className='text-left'>
              <button className='border rounded bg-[#8A33FD] text-white px-8 p-2'>Reset Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCreatePassword
