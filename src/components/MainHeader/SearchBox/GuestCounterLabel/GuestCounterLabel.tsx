import React, { useState } from 'react';
import ICUser from '@/components/Icons/HeaderIcons/ICUser';
import ICDown from '@/components/Icons/HeaderIcons/ICDown';
import CounterPanel from '../CounterPanel/CounterPanel';
import { Popover } from 'antd';
import SearchAntdProvider from '../SearchAntdProvider/SearchProvider';
import "./GuestCounterLabel.scss"

interface CounterProps {
  adult: number;
  child: number;
  room: number;
}

interface GuestCounterProps {
  counter: CounterProps;
  setCounter: React.Dispatch<React.SetStateAction<CounterProps>>;
  isAllowedPet: boolean;
  setIsAllowedPet: React.Dispatch<React.SetStateAction<boolean>>;
}


const GuestCounter: React.FC<GuestCounterProps> = ({
  counter,
  setCounter,
  isAllowedPet,
  setIsAllowedPet
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SearchAntdProvider>
      <Popover
        content={<CounterPanel
          onClose={handleClose}
          counter={counter}
          setCounter={setCounter}
          isAllowedPet={isAllowedPet}
          setIsAllowedPet={setIsAllowedPet}
        />}

        trigger='click'
        placement='bottomLeft'
        arrow={false}
        onOpenChange={handleIsOpenChange}
        open={isOpen}
      >
        <div
          className="
                counter-label
                flex 
                w-[27%] 
                h-[max-content]
                p-4
                items-center 
                justify-between 
                bg-white 
                rounded-lg 
                cursor-pointer
                leading-4
                relative
                overflow-hidden
              "
        >
          <div className="flex items-center w-full pr-4">
            <span className="pr-2">
              <ICUser
                width="20px"
                height="20px"
                fillColor="#595959"
              />
            </span>

            <div className="flex-1 truncate text-sm font-medium">
              {counter.adult} người lớn · {counter.child} trẻ em · {counter.room} phòng
            </div>

           
          </div>
          <span className="absolute right-[5px]">
              <ICDown
                fillColor="#1a1a1a"
                height="16px"
                width="16px"
              />
            </span>
        </div>
      </Popover>
    </SearchAntdProvider>
  )
}

export default GuestCounter
/**<div className='flex items-center'>

          <div className=' flex items-center justify-between truncate'>
            <span className='pr-2'>
                  <ICUser 
                      width='20px'
                      height='20px'
                      fillColor='#595959'
                  />
              </span>

              <span className=' absolute right-[5px]'>
               
              </span>
          </div>
          
        </div> */