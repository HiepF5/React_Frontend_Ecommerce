import React from 'react'
import Logo from '../../assets/HomeImg/Logo_Main.png'
import { CiSearch } from 'react-icons/ci'
import { IoMdArrowDropdown } from 'react-icons/io'

const NavbarLogin = () => {
  return (
    <div className='container px-[100px] py-4'>
      <div className='flex justify-around items-center'>
        <div className=''>
          <img className='' src={Logo} alt='' />
        </div>

        <div className='relative group hidden sm:block'>
          <input
            type='text'
            placeholder='Search'
            className='w-[250px] sm: w-[200px] 
                group-hover:w-[300px] transition-all 
                duration-300 rounded
                border-gray-300 focus:outline-none
                focus:border-1 px-11 py-1
                bg-[#F6F6F6]
                focus:border-primary 
                dark:border-gray-500
                dark:bg-gray-800'
          />
          <CiSearch
            className='text-gray-500
              group-hover:text-primary
              absolute top-1/2 -translate-y-1/2 left-4
              '
          />
        </div>
        <ul className='flex gap-4'>
          <div className='flex justify-center items-center border rounded px-8 p-2'>
            <span>English(United States)</span>
            <IoMdArrowDropdown />
          </div>
          <button className='border rounded bg-[#8A33FD] text-white px-8 p-2'>Login</button>
          <button className='border rounded  text-[#8A33FD] px-8'>Sign Up</button>
        </ul>
      </div>
    </div>
  )
}

export default NavbarLogin
