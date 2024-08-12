import React from 'react';
import "./QuantitySelector.scss";
import ICMinus from '../Icons/CountableIcons/ICMinus';
import ICPlus from '../Icons/CountableIcons/ICPlus';
  
interface QuantitySelectorProps{
    maximun: number;
    minimun: number;
    value: number;
    onIncrease: Function;
    onDecrease: Function;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    maximun,
    minimun,
    value,
    onDecrease,
    onIncrease
}) => {

  return (
    <div className='quantity-selector flex items-center rounded-lg h-[40px]'>
        <button 
            className={
                `quantity-selector-button cursor-pointer w-[40px] h-[40px] py-1 px-3
                 ${value <= minimun ? "quantity-selector-disabled": ""}
                `
            }
            tabIndex={-1}
            onClick={()=>onDecrease()}
        >    
            <ICMinus 
                fillColor={value <= minimun ? '#a2a2a2' : '#006ce4'}
                width='14px'
                height='14px'
            />
        </button>

        <span className='min-w-[32px] mx-1 text-center inline-block text-medium'>
            {value}
        </span>
        
        <button 
             className={
                `quantity-selector-button cursor-pointer w-[40px] h-[40px] py-1 px-3
                 ${value >= maximun ? "quantity-selector-disabled": ""}
                `}
            tabIndex={-1}
            onClick={() => onIncrease()}
        >
           <ICPlus
                fillColor={value >= maximun ? '#a2a2a2' : '#006ce4'}
                width='14px'
                height='14px'
           />
        </button>
    </div>
  )
}

export default QuantitySelector