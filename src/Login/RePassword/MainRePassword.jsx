import React from 'react'
import In_3 from '../../assets/SignInImg/In_3.png'
const MainRePassword = () => {
  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_3} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left '>Reset Your Password</h1>
            <span className='text-left text-gray-400/95'>
              Enter your email and we'll send you a link to reset your password.
            </span>
            <span className='text-left text-gray-400/95'>Please check it.</span>

            <div className='flex flex-col text-left pt-8 gap-2'>
              <span>Email</span>
              <input
                type='email'
                placeholder='focus001@gmail.com'
                className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
              />
              <span className='text-red-400'>We can not find your email</span>
            </div>

            <div className='text-left'>
              <button className='border rounded bg-[#8A33FD] text-white px-8 p-2'>Send</button>
              <p>Back to Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainRePassword
