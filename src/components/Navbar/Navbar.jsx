import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoIosLogIn } from 'react-icons/io'
import { Badge, Button } from '@material-tailwind/react'
import { toast } from 'react-toastify'
import { useProducts } from '../../Store/ProductsStore'
import { useUsers } from '../../Store/UsersStore'
import Logo from '../../assets/HomeImg/Logo_Main.png'

const Navbar = () => {
  const totalItem = useProducts((state) => state.totalItem)
  const userData = useUsers((state) => state.userData)
  const navigate = useNavigate()

  const handleAdminClick = (e) => {
    if (!userData || Object.keys(userData).length === 0) {
      e.preventDefault()
      toast.error('Bạn cần đăng nhập')
      return
    }

    if (userData.role.some((role) => role.roleName === 'ADMIN')) {
      navigate('/admin')
    } else {
      e.preventDefault()
      toast.error('Bạn cần là admin')
    }
  }

  return (
    <div className='container px-[100px] py-4'>
      <div className='flex justify-around items-center'>
        <ul className='flex gap-12'>
          <li className='font-bold'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/iphone'>Iphone</Link>
          </li>
          <li>
            <Link to='/samsung'>SamSung</Link>
          </li>
          <li>
            <Link to='/xiaomi'>Xiaomi</Link>
          </li>
          <li>
            <Link to='/nokia'>Nokia</Link>
          </li>
          <li>
            <Link to='/oppo'>Oppo</Link>
          </li>
          <li>
            <Link to='/admin' onClick={handleAdminClick}>
              Admin
            </Link>
          </li>
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
          <Link to='/cart' className='bg-[#F6F6F6]'>
            <Badge content={totalItem}>
              <Button>
                <AiOutlineShoppingCart className='' />
              </Button>
            </Badge>
          </Link>
          <Link to='/login' className='bg-[#F6F6F6]'>
            <Button variant='gradient' className='flex items-center gap-3'>
              <AiOutlineUserAdd className='' />
              {userData.username}
            </Button>
          </Link>
          <Link to='/login' className='bg-[#F6F6F6]'>
            <Button variant='gradient' className='flex items-center gap-3'>
              <IoIosLogIn className='' />
              Login
            </Button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
