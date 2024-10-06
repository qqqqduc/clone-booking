import { Calendar, message } from "antd";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/vi";
import locale from "antd/es/date-picker/locale/vi_VN";
import Heading from "../Heading";
import RadioCheckBox from "../RadioCheckBox";

dayjs.locale("vi");

interface ScheduleProps {}

function Schedule({}: ScheduleProps) {
  const [selectedValue, setSelectedValue] = useState<Dayjs>();
  const [allowStay, setAllowStay] = useState(true);

  const handleDateSelect = (date: Dayjs) => {
    setSelectedValue(date);
    message.success(`Ngày đã chọn: ${date.format("DD/MM/YYYY")}`);
  };

  const disabledDate = (current: Dayjs) => {
    return current.isBefore(dayjs().startOf("day"));
  };

  return (
    <>
      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <p className="text-base font-bold pb-4 border-bottom-soft">
          Ngày đầu tiên mà khách có thể nhận phòng là khi nào?
        </p>
        <Calendar
          fullscreen={false}
          disabledDate={disabledDate}
          onSelect={handleDateSelect}
          locale={locale}
          headerRender={({ value }) => {
            const current = value;
            const month = current.month();
            const year = current.year();

            return (
              <div style={{ padding: 8 }}>
                <div className="relative">
                  <span className="block text-center font-semibold text-base">
                    {`Tháng ${month + 1} ${year}`}
                  </span>
                </div>
              </div>
            );
          }}
        />
      </div>

      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-base font-bold text-gray-800 mb-4">
          Quý vị có muốn cho phép khách lưu trú trên 30 đêm không?
        </h2>
        <p className="text-gray-400 mb-4">
          Cho phép khách lưu trú đến 90 đêm có thể giúp Quý vị lấp phòng và nắm
          bắt xu hướng làm việc từ xa của khách.
        </p>
        <RadioCheckBox
          setSelectedValue={setAllowStay}
          selectedValue={allowStay}
          inputName="allowStay"
          isHorizontal
          options = {[
            { label: "Có", value: "yes", checked: false },
            { label: "Không", value: "no", checked: false },
          ]}
        />
      </div>
    </>
  );
}

export default Schedule;
