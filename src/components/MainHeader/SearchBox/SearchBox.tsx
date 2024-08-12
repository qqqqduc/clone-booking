import React, { useCallback, useState } from 'react';
import GuestCounterLabel from './GuestCounterLabel/GuestCounterLabel';
import LocationLabel from './LocationLabel/LocationLabel';
import BookingCalendar from './BookingCalendar/BookingCalendar';
import { Dayjs } from 'dayjs';
import "./SearchBox.scss";
import { Alert, ConfigProvider } from 'antd';


const SearchBox = () => {
  const [counter, setCounter] = useState({ adult: 2, child: 0, room: 1 });
  const [isAllowedPet, setIsAllowedPet] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dates, setDates] = useState<Dayjs[]>([]); //state lưu đặt chỗ

  // state thông báo khi chưa nhập địa điểm mà đã ấn Tìm
  const [isEmptySearchValue, setIsEmptySearchValue] = useState(false);


  const handleSubmit = useCallback(() => {
    //state lưu kết quả tìm kiếm
    if (!searchValue) {
      setIsEmptySearchValue(true);
      return;
    }
    const submitData = {
      startDate: dates[0].format('DD-MM-YYYY'),
      endDate: dates[1].format('DD-MM-YYYY'),
      adultCount: counter.adult,
      childCount: counter.child,
      roomCount: counter.room,
      address: searchValue
    }
    console.log(submitData);
    // bước kế là xử lí routing với query trùng tên biến
    // tiến hành gọi api dựa vào query ở trang kết quả tìm kiếm
  }, [counter, isAllowedPet, searchValue, dates])

  return (
    <div className='custom-search-box relative left-1/2 z-[3]'>
      <div className='custom-search-box-layout flex gap-1 rounded-lg p-1 mt-6 mb-4'>

        <LocationLabel
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setIsEmptySearchValue={setIsEmptySearchValue}
        />

        <BookingCalendar
          setDates={setDates}
        />

        <GuestCounterLabel
          counter={counter}
          setCounter={setCounter}
          isAllowedPet={isAllowedPet}
          setIsAllowedPet={setIsAllowedPet}

        />

        <button
          onClick={handleSubmit}
          type='submit'
          className='search-box-button text-white cursor-pointer font-semibold rounded-md px-6 leading-4'>
          Tìm
        </button>


      </div>

      {/*không cần quan tâm đoạn bên dưới*/}
      {
        isEmptySearchValue && 
        <div className='custom-search-error w-[max-content] absolute bottom-[-28px] left-[12px] rounded-lg'>
          <div className='relative'>
            <div style={{
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '10px solid #d4111e',
              position: 'absolute',
              left: '5%',
              transform: 'translateX(-50%)',
              top: '-8px'
            }}></div>

            <ConfigProvider
              theme={{
                token: {
                  colorErrorBg: '#d4111e',
                  colorErrorBorder: '#d4111e',
                  borderRadiusLG: 4
                },
                components: {
                  Alert: {
                    defaultPadding: '4px 8px'
                  },
                },
              }}
            >
              <Alert
                message="Vui lòng nhập điểm đến để bắt đầu tìm kiếm"
                type='error'
              />
            </ConfigProvider>

          </div>
        </div>
      }

    </div>
  )
}

export default SearchBox