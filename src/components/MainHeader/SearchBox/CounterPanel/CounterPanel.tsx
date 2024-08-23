import React, { useCallback, useState } from 'react';
import "./CounterPanel.scss";
import QuantitySelector from '@/components/MainHeader/QuantitySelector/QuantitySelector';
import { Switch } from 'antd';

interface CounterProps {
  adult: number;
  child: number;
  room: number;
}

interface CounterPanelProps{
  onClose: () => void;
  counter: CounterProps;
  setCounter: React.Dispatch<React.SetStateAction<CounterProps>>;
  isAllowedPet: boolean;
  setIsAllowedPet: React.Dispatch<React.SetStateAction<boolean>>;
}

const CounterPanel: React.FC<CounterPanelProps> = ({
  onClose,
  counter,
  setCounter,
  setIsAllowedPet,
  isAllowedPet
}) => {
  const handleChange = (isAllowedPet: boolean) => {
    setIsAllowedPet(isAllowedPet);
  };

  const onIncrease = (type: keyof CounterProps)=> {
    setCounter(prevCounter => ({
      ...prevCounter,
      [type]: prevCounter[type] + 1,
    }))
  }

  const onDecrease = (type: keyof CounterProps)=> {
    setCounter(prevCounter => ({
      ...prevCounter,
      [type]: prevCounter[type] - 1,
    }))
  }

  return (
    <div    
        className='min-w-[350px] z-50 bg-white box-border top-[calc(100%+8px)] right-0 p-5'
    >
        <div className='mb-1 flex justify-between items-center'>
            <span className='text-sm leading-5 font-medium'>Người lớn</span>

            <QuantitySelector 
                minimun={1}
                maximun={30}
                onDecrease={()=> onDecrease('adult')}
                onIncrease={()=> onIncrease('adult')}
                value={counter.adult}
            />
            
        </div>
        <div className='mb-1 flex justify-between items-center'>
            <span className='text-sm leading-5 font-medium'>Trẻ em</span>

            <QuantitySelector 
                minimun={1}
                maximun={10}
                onDecrease={()=> onDecrease('child')}
                onIncrease={()=> onIncrease('child')}
                value={counter.child}
            />
            
        </div>
        <div className='mb-1 flex justify-between items-center'>
            <span className='text-sm leading-5 font-medium'>Số phòng</span>

            <QuantitySelector 
                minimun={1}
                maximun={10}
                onDecrease={()=> onDecrease('room')}
                onIncrease={()=> onIncrease('room')}
                value={counter.room}
            />
            
        </div>
        <div className='counter-panel-pet mt-4 pt-4 border-t leading-5'>
          <span className='flex justify-between items-center'>
            Mang theo thú cưng 

            <Switch checked={isAllowedPet} onChange={handleChange} />
          </span>
        </div>  
        
        <button 
          className='counter-panel-button mt-4 px-3 py-1.5 font-medium bg-transparent border rounded w-full leading-7'
          onClick={onClose}
        >
          Xong
        </button>
    </div>
  )
}

export default CounterPanel