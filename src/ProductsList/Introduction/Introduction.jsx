import React from 'react'
import TitleList from '../../components/TitleList/TitleList'

const Introduction = () => {
  return (
    <div className='container mx-auto'>
      <TitleList title='Chào mừng bạn đến với Euphoria' />
      <div className='flex flex-wrap'>
        <div className='w-full p-4'>
          <h1 className='text-3xl font-bold'> </h1>
          <p className='text-lg leading-loose'>
            Trang web thời trang hàng đầu dành cho phụ nữ Khám phá bộ sưu tập trang phục nữ mới nhất của chúng tôi Mua
            sắm ngay Giới thiệu về Euphoria Euphoria là trang web thời trang hàng đầu dành cho phụ nữ Việt Nam. Chúng
            tôi cung cấp nhiều loại trang phục thời trang và phong cách cho phụ nữ ở mọi lứa tuổi. Tại Euphoria, bạn sẽ
            tìm thấy mọi thứ bạn cần để hoàn thiện tủ quần áo của mình, từ những món đồ cơ bản hàng ngày đến những bộ
            trang phục lộng lẫy cho những dịp đặc biệt. Chúng tôi cam kết cung cấp cho khách hàng những sản phẩm chất
            lượng cao với giá cả phải chăng. Chúng tôi cũng cung cấp dịch vụ khách hàng tuyệt vời để đảm bảo bạn hài
            lòng với trải nghiệm mua sắm của mình. Mua sắm tại Euphoria Mua sắm tại Euphoria thật dễ dàng và thuận tiện.
            Bạn có thể duyệt qua trang web của chúng tôi hoặc truy cập một trong các cửa hàng của chúng tôi trên toàn
            quốc. Khi bạn mua sắm tại Euphoria, bạn có thể yên tâm rằng bạn đang nhận được những sản phẩm chất lượng cao
            với giá cả phải chăng. Chúng tôi cũng cung cấp dịch vụ khách hàng tuyệt vời để đảm bảo bạn hài lòng với trải
            nghiệm mua sắm của mình.
          </p>
          <a href='#' className='text-blue-500 underline'>
            Mua sắm ngay
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction
