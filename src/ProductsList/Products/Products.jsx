const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2011%20Pro/1.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2011%20Pro/2.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/1.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/2.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/3.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/4.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 7,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/5.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Green'
  },
  {
    id: 8,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/IPhone%2012/6.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 9,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://github.com/HiepF5/Db_Ecommercer/blob/main/IPhone/iPhone%2011/1.jpg?raw=true',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  }
]

export default function Products() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Customers also purchased</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <div key={product.id} className='group relative '>
              <div className='overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
                <img src={product.imageSrc} alt={product.imageAlt} className=' h-[200px] w-full object-center h-auto' />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <p className='text-sm font-medium text-gray-900'>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
