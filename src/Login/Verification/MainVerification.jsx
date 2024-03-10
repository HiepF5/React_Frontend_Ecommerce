import React from 'react'
import In_5 from '../../assets/SignInImg/In_5.png'
import { IoIosArrowBack } from 'react-icons/io'
const MainVerification = () => {
  return (
    <div className='container'>
      <div>
        <div className='grid grid-cols-2 text-center'>
          <div className='max-w-[956px] h-[675px]'>
            <img src={In_5} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='container flex flex-col gap-y-4 pt-5'>
            <h1 className='font-bold text-3xl text-left '>Verification</h1>
            <span className='text-left text-gray-400/95'>Verify your code.</span>
            <div className='flex flex-col text-left pt-8 gap-2'>
              <span>Verification Code</span>
              <input
                type='text'
                placeholder='0975'
                className='h-16 px-4 border rounded border-gray-300 outline-none text-gray-700 text-lg'
              />
            </div>

            <div className='text-left'>
              <button className='border rounded bg-[#8A33FD] text-white px-8 p-2'>Verify Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVerification
