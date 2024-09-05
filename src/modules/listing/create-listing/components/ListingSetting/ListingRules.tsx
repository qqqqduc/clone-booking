import "./ListingSetting.scss";

interface ListingRulesProps {}

function ListingRules({}: ListingRulesProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Quy định chung</h1>
      <div className="bg-white custom-room-setting-shadow py-6 px-4">
        {/* Các điều khoản cho phép */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span>Cho phép hút thuốc</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Cho phép vật nuôi</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Cho phép tiệc tùng/sự kiện</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Thời gian nhận phòng */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-lg font-semibold">
              Nhận phòng
            </label>
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Từ</label>
                <select className="w-full border-gray-300 rounded-md p-2">
                  <option>15:00</option>
                  <option>14:00</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Đến</label>
                <select className="w-full border-gray-300 rounded-md p-2">
                  <option>18:00</option>
                  <option>19:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Thời gian trả phòng */}
          <div>
            <label className="block mb-2 text-lg font-semibold">
              Trả phòng
            </label>
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Từ</label>
                <select className="w-full border-gray-300 rounded-md p-2">
                  <option>08:00</option>
                  <option>07:00</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Đến</label>
                <select className="w-full border-gray-300 rounded-md p-2">
                  <option>11:00</option>
                  <option>12:00</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingRules;
