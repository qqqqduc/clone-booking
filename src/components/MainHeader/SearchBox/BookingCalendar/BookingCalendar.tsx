import React from 'react';
import { DatePicker } from 'antd';
import ICCalendar from '@/components/Icons/HeaderIcons/ICCalendar';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import SearchAntdProvider from '../SearchAntdProvider/SearchProvider';
import viVN from 'antd/es/locale/vi_VN'

import 'dayjs/locale/vi';
import "./BookingCalendar.scss";


// cấu hình lại locale 
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);

dayjs.updateLocale('vi', {
  monthsShort: [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
    'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ]
});

interface BookingCalendarProps {
  //dates: dayjs.Dayjs[]; chưa cần
  setDates: React.Dispatch<React.SetStateAction<Dayjs[]>>;
}

const { RangePicker } = DatePicker;

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  setDates
}) => {
  const today = dayjs().startOf('day');

  const onChange = (dates: any, dateStrings: [string, string]) => {
    setDates(dates);
  };

  const disabledDate = (current: dayjs.Dayjs) => {
    return current && current.isBefore(today, 'day');
  };

  const panelRender = (originPanel: React.ReactNode) => (
    <div>
      <div>
        <h3
          className='custom-calender-panel text-base font-medium text-center'
        >Chọn ngày khởi hành
        </h3>
      </div>
      {originPanel}
    </div>
  );
  return (

    <SearchAntdProvider
      locale={viVN}
    >
      <RangePicker
        allowEmpty={[true, false]}
        onChange={onChange}
        disabledDate={disabledDate}
        placeholder={['Ngày nhận phòng', 'Ngày trả phòng']}
        variant='borderless'
        suffixIcon={<ICCalendar
          width='20px'
          height='20px'
          fillColor='#595959'
        />}
        className='custom-range-picker'
        popupClassName='custom-range-picker-popup'
        panelRender={panelRender}
        format="DD-MM-YYYY"
      />
    </SearchAntdProvider>

  );
}

export default BookingCalendar