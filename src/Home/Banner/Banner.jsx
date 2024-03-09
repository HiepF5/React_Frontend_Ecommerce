import React from 'react'
import Banner1 from '../../assets/HomeImg/banner_1.jpg'
import Slider from 'react-slick'
const ImageList = [
  {
    id: 1,
    img: Banner1,
    title: 'T-Shift / Top',
    season: 'Spring',
    name: 'Value Pack',
    description: 'cool / colorful /comfy'
  },
  {
    id: 2,
    img: Banner1,
    title: 'T-Shift / Top',
    season: 'Summer',
    name: 'Value Pack',
    description: 'cool / colorful /comfy'
  },
  {
    id: 3,
    img: Banner1,
    title: 'T-Shift / Top',
    season: 'Autumn',
    name: 'Value Pack',
    description: 'cool / colorful /comfy'
  },
  {
    id: 4,
    img: Banner1,
    title: 'T-Shift / Top',
    season: 'Winter',
    name: 'Value Pack',
    description: 'cool / colorful /comfy'
  }
]
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className='relative '>
      {/* hero section*/}
      <div className='container'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className=' items-center flex '>
                {/* text content section  */}
                <div className='absolute text-left text-white pl-[180px]'>
                  <p className='text-2xl py-5'>{data.title}</p>
                  <p className='text-7xl font-bold pb-4'>{data.season}</p>
                  <p className='text-7xl font-bold '>{data.name}</p>
                  <p className='text-2xl py-5'>{data.description}</p>
                  <div>
                    <button
                      className=' bg-gray-50 rounded-md hover:scale-105 
                               font-bold text-sm py-2 px-10
                             text-black border bg-while'
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                {/* image section  */}
                <div className=''>
                  <div className=''>
                    <img className='' src={data.img} alt='' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Banner
