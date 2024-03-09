import React from 'react'
import Logo from '../../assets/HomeImg/Logo_Main.png'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoMdSearch } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='container px-[100px] py-4'>
      <div className='flex justify-around items-center'>
        <div className=''>
          <img className='' src={Logo} alt='' />
        </div>
        <ul className='flex gap-12'>
          <li className='font-bold'>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Combos</li>
          <li>Joggers</li>
        </ul>
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
          <li className='p-3 bg-[#F6F6F6]'>
            <FiHeart className='' />
          </li>
          <li className='p-3 bg-[#F6F6F6]'>
            <AiOutlineUserAdd className='' />
          </li>
          <li className='p-3 bg-[#F6F6F6]'>
            <AiOutlineShoppingCart className='' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
