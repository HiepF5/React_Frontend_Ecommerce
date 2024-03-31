import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Products from '../Products/Products'
import ColorFilter from '../Sidebar/ColorFilter/ColorFilter'
import SizeFilter from '../Sidebar/SizeFilter/SizeFilter'
import CategoryFilter from '../Sidebar/CategoryFilter/CategoryFilter'
import SubCategoriesList from './SubCategories/SubCategories'
import SortOptionsList from './SortOptionsList/SortOptionsList'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false }
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' }
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false }
    ]
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false }
    ]
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true }
    ]
  }
]

export default function Sidebar() {
  return (
    <div className='bg-white container'>
      <div>
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>New Arrivals</h1>

            <div className='flex items-center'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                    Sort
                    <ChevronDownIcon
                      className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <SortOptionsList sortOptions={sortOptions} />
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type='button' className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'>
                <span className='sr-only'>View grid</span>
                <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>

          <section aria-labelledby='products-heading' className='pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>

            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}

              <form className='lg:block'>
                <h3 className='sr-only'>Categories</h3>
                <SubCategoriesList subCategories={subCategories} />

                {/* Color Filter */}
                <ColorFilter options={filters[0].options} />

                {/* Category Filter */}
                <CategoryFilter options={filters[1].options} />

                {/* Size Filter */}
                <SizeFilter options={filters[2].options} />
              </form>
              {/* Product grid */}
              <div className='lg:col-span-3'>
                <Products />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
