import {  Popover } from 'antd';
import React from 'react';
import Calendar from '../BookingCalendar/BookingCalendar';
import ICCalendar from '@/components/Icons/HeaderIcons/ICCalendar';
import SearchPopoverProvider from '../SearchAntdProvider/SearchProvider';
import "./CalendarLabel.scss"

const CalendarLabel = () => {

  return (
    <SearchPopoverProvider>
          <Popover 
            content={<Calendar 
                    />
            }  
            trigger='click'
            arrow={false}
            placement='bottom'
          >
            <div 
              className='
                          calendar-label
                          flex 
                          h-[max-content]
                          w-[27%] 
                          px-4
                          py-4
                          items-center 
                          justify-between 
                          bg-white 
                          rounded-lg 
                          cursor-pointer
                          leading-4
                        '
            >
              <div className='flex items-center'>
                <span className='pr-2'>
                      <ICCalendar 
                          width='20px'
                          height='20px'
                          fillColor='#595959'
                      />
                  </span>

                  <button >
                    <span 
                        className='block overflow-hidden text-ellipsis whitespace-nowrap 
                                    text-sm font-medium px-2 custom-span'
                      >
                        Ngày nhận phòng
                    </span>
                  </button>

                  <span> — </span>

                  <button>
                    <span 
                        className='block overflow-hidden text-ellipsis whitespace-nowrap 
                            text-sm font-medium px-2 custom-span'
                    >
                        Ngày trả phòng
                    </span>
                  </button>
                </div>
            </div>
      </Popover>
    </SearchPopoverProvider>
  );
};


export default CalendarLabel