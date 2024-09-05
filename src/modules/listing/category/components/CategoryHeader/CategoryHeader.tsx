import React from 'react';
import "./CategoryHeader.scss"

const CategoryHeader = () => {
  return (

    <div className='pt-4 pb-6 lg:pt-8'>
      <div className='category-main-heading'>
        Đăng chỗ nghỉ của Quý vị trên Booking.com và bắt đầu đón tiếp khách thật nhanh chóng!
      </div>
      <div className='category-heading pt-2'>
        Để bắt đầu, chọn loại chỗ nghỉ Quý vị muốn đăng trên Booking.com
      </div>
    </div>
  )
}

export default CategoryHeader;