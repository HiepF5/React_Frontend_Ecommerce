import React from 'react'
import Img1 from '../../assets/HomeImg/samsunga10.png'
import Img2 from '../../assets/HomeImg/iphonese.png'
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Samsung Galaxy A10',
    content: 'Affordable and Reliable',
    description: 'Get up to 30% OFF on selected models',
    aosDelay: '0'
  },
  {
    id: 2,
    img: Img2,
    title: 'iPhone SE (2020)',
    content: 'Sleek Design, Powerful Performance',
    description: 'Enjoy up to 40% OFF on summer sale',
    aosDelay: '200'
  }
]

const Deals = () => {
  return (
    <div className=' text-dark'>
      <div className='container pt-[100px] flex'>
        {ProductsData.map((data) => (
          <div key={data.id}>
            <div className='flex items-center'>
              {/* text content section  */}
              <div className='absolute flex flex-col text-left px-7 gap-4'>
                <p className='font-bold'>{data.title}</p>
                <p className='text-3xl font-bold max-w-[240px]'>{data.content}</p>
                <p className=''>{data.description}</p>
                <div>
                  <button className='font-bold underline'>Explore Items</button>
                </div>
              </div>
              {/* image section  */}
              <div>
                <img
                  className='w-[605px] h-[350px] 
                  object-contain mx-auto
                   border rounded '
                  src={data.img}
                  alt=''
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Deals
