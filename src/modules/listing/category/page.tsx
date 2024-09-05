import React from 'react'
import CategoryHeader from "./components/CategoryHeader/CategoryHeader";
import CategoryList from "./components/CategoryList/CategoryList";

export const Category = () => {
  return (
    <div className='px-10 mb-10 lg:pt-8 w-[500px] lg:w-[100%]'>
        <CategoryHeader />
        <CategoryList /> 
    </div>
  )
}
