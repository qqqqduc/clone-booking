import React from 'react';
import "./CategoryList.scss";
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoryList = () => {
  return (
    <div className='category-list pt-2 pb-6 px-0 flex flex-col lg:justify-evenly gap-4 lg:gap-0 lg:flex-row lg:py-6 lg:px-5'>
      <CategoryItem
        iconImg='/img/category/flat.jpg'
        description='Chỗ nghỉ tự nấu nướng, đầy đủ nội thất mà khách thuê nguyên căn.'
        type='Căn hộ'
        url='/listing/create-listing?group=flat'
      />
      <CategoryItem
        iconImg='/img/category/house.jpg'
        description='Các chỗ nghỉ như căn hộ, nhà nghỉ dưỡng, biệt thự, v.v.'
        type='Nhà'
        url='/listing/create-listing?group=house'
      />
      <CategoryItem
        iconImg='/img/category/hotel.jpg'
        description='Các chỗ nghỉ như khách sạn, nhà nghỉ B&B, nhà khách, hostel, khách sạn căn hộ, v.v.'
        type='Khách sạn, nhà nghỉ B&B hay tương tự'
        url='/listing/create-listing?group=hotel'
      />

      <CategoryItem
        iconImg='/img/category/other-homestay.jpg'
        description='Các chỗ nghỉ như tàu thuyền, khu cắm trại, lều trại sang trọng, v.v.'
        type='Các loại chỗ nghỉ khác'
        isLastItem
        url='/listing/create-listing?group=other-homestay'
      />

    </div>
  )
}

export default CategoryList