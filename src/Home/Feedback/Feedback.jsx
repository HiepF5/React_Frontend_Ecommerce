import React from 'react'
import TitleList from '../../components/TitleList/TitleList'
import Hero_1 from '../../assets/Hero_1.png'
import Hero_2 from '../../assets/Hero_2.png'
import Hero_3 from '../../assets/Hero_3.png'
import CardFeedback from '../../components/Card/CardFeedback'

const ProductsData = [
  {
    id: 1,
    img: Hero_1,
    title: 'Floyd Miles',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet`,
    price: '$123.00',
    aosDelay: '200'
  },
  {
    id: 2,
    img: Hero_2,
    title: 'Ronald Richards',
    description:
      'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    price: '$37.00',
    aosDelay: '200'
  },
  {
    id: 3,
    img: Hero_3,
    title: 'Savannah Nguyen',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    price: '$37.00',
    aosDelay: '200'
  }
]
const Feedback = () => {
  return (
    <div className='container'>
      <TitleList title='Feedback' />
      <div className='pt-[50px] flex gap-4 justify-between'>
        {ProductsData.map((data) => (
          <CardFeedback clothes={data} key={data.id} />
        ))}
      </div>
    </div>
  )
}

export default Feedback
