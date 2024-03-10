import React from 'react'
import In_2 from '../../assets/SignInImg/In_2.png'
import GG from '../../assets/SignInImg/Google.png'
import TW from '../../assets/SignInImg/twitter.png'
import { FaEyeSlash } from 'react-icons/fa'
const MainSignUp = () => {
  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_2} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left '>Sign Up</h1>
            <span className='text-left text-gray-400/95'>Sign up for free to access to in any of our product</span>
            <div className=' flex items-center gap-x-3 border-2 rounded px-32 py-2 border-gray-600/40 '>
              <img src={GG} alt='' />
              <button className='text-[#8A33FD] '>Continue With Google</button>
            </div>
            <div className=' flex items-center gap-x-3 border-2 rounded px-32 py-2 border-gray-600/40 '>
              <img src={TW} alt='' />
              <button className='text-[#8A33FD] '>Continue With Twitter</button>
            </div>

            <div className='flex flex-col text-left pt-8 gap-2'>
              <span>Email Address</span>
              <input
                type='email'
                placeholder='designer@gmail.com'
                className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
              />
              <span className='text-red-400'>Error Message</span>
            </div>
            <div className='flex flex-col text-left gap-2 '>
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
            <div className='text-left'>
              <span>Use 8 or more characters with a mix of letters, number & symbols</span>
              <div className='flex items-center gap-2'>
                <input id='a' type='checkbox' className='h-4 w-4 accent-pink-500' />
                <label htmlFor='a'>Agree to our Terms of use and Privacy Policy</label>
              </div>
              <div className='flex items-center gap-2'>
                <input id='s' type='checkbox' className='h-4 w-4 accent-pink-500' />
                <label htmlFor='s'>Subscribe to our monthly newsletter</label>
              </div>
            </div>
            <div className='text-left'>
              <button className='border rounded bg-[#8A33FD] text-white px-8 p-2'>Sign Up</button>
              <p>Already have an account?Log in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSignUp
