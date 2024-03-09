import React from 'react'
import Img1 from '../../assets/HomeImg/deals_1.jpg'
import Img2 from '../../assets/HomeImg/deals_2.png'
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Low Price',
    content: 'High Coziness',
    description: 'Up to 50% OFF',
    aosDelay: '0'
  },
  {
    id: 2,
    img: Img2,
    title: 'Beyoung Presents',
    content: 'Breezy Summer Style',
    description: 'Up to 50% OFF',
    aosDelay: '200'
  }
]

const Deals = () => {
  return (
    <div className=' text-white'>
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
