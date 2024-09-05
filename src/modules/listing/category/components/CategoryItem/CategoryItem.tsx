"use client"
import React, { useCallback } from 'react';
import "./CategoryItem.scss";
import Image from 'next/image';
import ICRight from '@/components/Icons/DirectionIcons/ICRight';
import { useRouter } from 'next/navigation';

interface CategoryItemProps {
    iconImg: string;
    type: string;
    description: string;
    isLastItem?: boolean;
    url: string;
}
const CategoryItem: React.FC<CategoryItemProps> = ({
    iconImg,
    type,
    description,
    isLastItem,
    url
}) => {
    const router = useRouter();

    const handleClick = useCallback(()=> {
        router.push(url);
    }, [])
    return (
        <div className='bg-white relative cursor-pointer' onClick={handleClick}>
            <div
                className={`${isLastItem ? "last-category-item" : ""} 
                            category-item-content
                            px-4 lg:mt-6 lg:w-[250px] lg:h-[220px] py-2 lg:py-0
                            w-[100%]
                            `
                }
            >
                <div className='mb-2 inline-block w-[20%] lg:flex lg:justify-center lg:w-[100%]'>
                    <Image
                        width={50}
                        height={50}
                        alt='category'
                        src={iconImg}
                    />
                </div>

                <div className='inline-block w-[70%] lg:block lg:w-[100%]'>
                    <div className='mb-2 lg:text-center font-bold text-base leading-[24px]'>
                        {type}
                    </div>
                    <p className='mb-2 lg:text-center text-xs leading-[18px]'>
                        {description}
                    </p>

                </div>
                <div className="category-item-btn absolute bottom-[10px] px-3 py-[6px] hidden lg:block">
                    <div className='text-center text-white'>
                        Đăng chỗ nghỉ
                    </div>
                </div>

                <div className='inline-block w-[10%] lg:hidden'>
                    <span>
                        <ICRight
                            fillColor='#006ce4'
                            width='27px'
                            height='27px'
                        />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default CategoryItem