import React, { ChangeEventHandler, useCallback, useRef, useState } from 'react';
import SearchAntdProvider from '../SearchAntdProvider/SearchProvider';
import { Popover } from 'antd';
import SearchResult from '../SearchResult/SearchResult';
import ICBed from '@/components/Icons/HeaderIcons/ICBed';
import "./LocationLabel.scss";

interface LocationLabelProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsEmptySearchValue: React.Dispatch<React.SetStateAction<boolean>>
}

const LocationLabel: React.FC<LocationLabelProps> = ({
  searchValue,
  setSearchValue,
  setIsEmptySearchValue
}) => {
  //  thường lưu cache ở backend nhưng backend không làm chức năng cache nên tạm fix cứng ở frontend
  const bestLocations = ["Phú Quốc", "Hà Nội", "Sa pa", "Đà Lạt", "Đà Nẵng"];

  // state suggestions  để lưu dữ liệu gọi từ api, nếu không có sẽ lấy bestLocations mặc định
  const [suggestions, setSuggestions] = useState(bestLocations);

  // state filterSuggestions  để lưu kết quả lọc, để tạm any, thay bằng response sau
  // mặc định bằng dữ liệu gọi từ api luôn
  const [filterSuggestions, setFilterSuggestions] = useState<any>(suggestions);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  
    const inputValue = e.target.value;
    const matchingArray = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    // nếu như không tìm thấy ngay kí tự đầu tiên sẽ hiện kết quả mặc định
    // nếu như search Hà => ra Hà Nội, mà ấn thêm f ra Hàf sẽ hiện kết quả cũ => cần một state lưu cache, làm sau

    setFilterSuggestions(matchingArray);

    setSearchValue(inputValue);
    setActiveSuggestionIndex(0);
    setShowSuggestion(true);
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    const formatTargetValue = target.innerText.replace('Việt Nam', '').trim();
    setSearchValue(formatTargetValue);
    //lọc lần nữa
    const matchingArray = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(formatTargetValue.toLowerCase()) > -1);
    setFilterSuggestions(matchingArray);

    setActiveSuggestionIndex(0);
    setShowSuggestion(false);
  }, []);

  const handleKeydown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearchValue(filterSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestion(false);
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex(prevIndex => {
        if (prevIndex === 0) {
          return filterSuggestions.length - 1;
        }
        return prevIndex - 1;
      });
    } else if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex(prevIndex => {
        if (prevIndex === filterSuggestions.length - 1) {
          return 0; 
        }
        return prevIndex + 1;
      });
    }
  }, [filterSuggestions, activeSuggestionIndex]);
  
  const handleClickLabel = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef])

  const handleOpenChange = (showSuggestion: boolean) => {
    setShowSuggestion(showSuggestion);
  }

  // tắt cảnh báo
  const handleFocus = useCallback(()=> {
    setIsEmptySearchValue(false);
  },[setActiveSuggestionIndex]);

  return (
    <SearchAntdProvider>
      <Popover
        trigger='click'
        content={
          <SearchResult
            searchValue={searchValue}
            filterSuggestions={filterSuggestions}
            handleClick={handleClick}
            activeSuggestionIndex={activeSuggestionIndex}
          />}
        open={showSuggestion}
        onOpenChange={handleOpenChange}
        arrow = {false}
        placement='bottomLeft'
      >
        <div
          className=' custom-location-label
                      flex
                      h-[max-content]
                      px-4
                      py-2
                      items-center 
                      justify-between  
                      bg-white 
                      rounded-lg 
                      cursor-pointer
                      leading-4
                    '
          onClick={handleClickLabel}
        >
          <div className='flex items-center'>
            <span className='pr-2'>
              <ICBed
                width='20px'
                height='20px'
                fillColor='#595959'
              />
            </span>
            <input
              className='font-medium text-sm outline-none px-1 py-2 
                         placeholder-text-primary focus:placeholder-gray-400'
              placeholder='Bạn muốn đến đâu?'
              value={searchValue}
              onChange={handleChange}
              onKeyDown={handleKeydown}
              onFocus={handleFocus}
              ref={inputRef}
            />

          </div>
        </div>


      </Popover>
    </SearchAntdProvider>
  )
}

export default LocationLabel