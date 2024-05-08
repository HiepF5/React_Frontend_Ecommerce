import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { BiGridSmall } from "react-icons/bi";
const Navbar = () => {
    return (
        <>
            <div className='flex justify-between p-4'>
                <div className='flex justify-center items-center'>
                    <RiMenu2Fill className='w-6 h-6 opacity-50' />
                    <p className='text-[22px] font-semibold mx-4'>Admin</p>
                    <div className='flex items-center border border-[#ADB5BD] px-3 py-2 rounded-lg'> <IoMdSearch className='w-6 h-6 opacity-50' /> <input className=' w-[320px] bg-[#F9FAFB]' type="text" /></div>
                </div>

                <div className='flex items-center gap-5'>
                    <FaBell className='w-6 h-6 opacity-50' />
                    <BiGridSmall className='w-10 h-10 opacity-50' />
                    <RxAvatar className='w-6 h-6 opacity-50' />
                    <button className='flex items-center bg-red-500 text-[18px] font-semibold px-2 py-2 rounded-lg text-white'> <FaCartShopping className='w-6 h-6 opacity-50 mr-2 text-white' /> Buy now</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
