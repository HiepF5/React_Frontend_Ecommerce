import React from 'react'
import In_1 from '../../assets/SignInImg/In_1.png'
import { FaEyeSlash } from 'react-icons/fa'
const MainSignIn = () => {
  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_1} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left pb-6'>Sign In Page</h1>
            <button className='text-[#8A33FD] border-gray-600/40 border-2 rounded px-32 py-2'>
              Continue With Google
            </button>
            <button className='border-gray-600/40 text-[#8A33FD] border-2 rounded px-32 py-2'>
              Continue With Twitter
            </button>
            <div className='flex flex-col text-left'>
              <span>User name or email address</span>
              <input
                type='text'
                className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
              />
            </div>
            <div className='flex flex-col text-left '>
              <div className='flex justify-between items-center'>
                <span>Password</span>
                <div className='flex justify-between items-center gap-2 text-gray-400'>
                  <FaEyeSlash />
                  <span>Hide</span>
                </div>
              </div>
              <input
                type='text'
                className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
              />
            </div>
            <div className='text-right'>
              <p className='underline'>Forgot your password?</p>
            </div>
            <div className='text-left'>
              <button className='border rounded bg-[#8A33FD] text-white px-8 p-2'>Sign In</button>
              <p>Don’t have an account? Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSignIn
