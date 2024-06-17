import React from 'react'
import Banner1 from '../../assets/HomeImg/iphone.png'
import Banner2 from '../../assets/HomeImg/samsung.png'
import Banner3 from '../../assets/HomeImg/oppo.png'
import Banner4 from '../../assets/HomeImg/nokia.png'
import Slider from 'react-slick'
const ImageList = [
  {
    id: 1,
    img: Banner1,
    title: 'Apple / iPhone 14',
    season: 'Fall',
    name: 'Pro Pack',
    description: 'elegant / powerful / innovative'
  },
  {
    id: 2,
    img: Banner2,
    title: 'Samsung / Galaxy S23',
    season: 'Winter',
    name: 'Tech Pack',
    description: 'dynamic / high-speed / versatile'
  },
  {
    id: 3,
    img: Banner3,
    title: 'Oppo / Find X6',
    season: 'Spring',
    name: 'Style Pack',
    description: 'sleek / advanced / vibrant'
  },
  {
    id: 4,
    img: Banner4,
    title: 'Nokia / XR21',
    season: 'Summer',
    name: 'Durability Pack',
    description: 'rugged / reliable / long-lasting'
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
