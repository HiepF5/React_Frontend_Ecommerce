import React from 'react'
import In_4 from '../../assets/SignInImg/In_4.png'
import { IoIosArrowBack } from 'react-icons/io'
const MainCheckEmail = () => {
  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_4} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-2xl text-left '>Check Email</h1>
            <span className='text-left text-gray-400/95'>
              Please check your email inbox and click on the provided link to reset your password. If you don't receive
              email, Click here to resend
            </span>
            <div className='flex items-center justify-start gap-x-3'>
              <IoIosArrowBack className='text-gray-400/95' />
              <span className='text-left text-gray-400/95'>Back to Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCheckEmail
