import "./ListingSetting.scss";
import QuantitySelector from "@/components/MainHeader/QuantitySelector/QuantitySelector";

interface RoomSettingProps {}

function RoomSetting({}: RoomSettingProps) {
  return (
    <>
      <h1 className="text-3xl mb-8 font-bold text-gray-800">
        Chi tiết chỗ nghỉ
      </h1>
      <div className="py-6 px-4 bg-white custom-room-setting-shadow">
        <div className="mb-8">
          <label className="block text-base mb-2">
            Bao nhiêu khách có thể lưu trú?
          </label>

          <QuantitySelector
            minimun={1}
            maximun={30}
            value={1}
            onIncrease={() => {}}
            onDecrease={() => {}}
          />
        </div>

        <div className="mb-8">
          <label className="block text-base mb-2">
            Có bao nhiêu phòng ngủ?
          </label>
          <QuantitySelector
            minimun={1}
            maximun={10}
            value={1}
            onIncrease={() => {}}
            onDecrease={() => {}}
          />
        </div>

        <div className="mb-8">
          <label className="block text-base mb-2">
            Có bao nhiêu phòng tắm?
          </label>
          <QuantitySelector
            minimun={1}
            maximun={10}
            value={1}
            onIncrease={() => {}}
            onDecrease={() => {}}
          />
        </div>

        <div className="mb-8">
          <label className="block text-base mb-2">
            Quý vị có tiếp đón trẻ em không?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="children"
                className="form-radio text-blue-600"
                checked
              />
              <span className="ml-2">Có</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="children"
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Không</span>
            </label>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg  mb-2">
            Quý vị có cung cấp nôi (cũi) không?
          </label>
          <div className="text-md text-gray-500 mb-3">
            Nôi (cũi) phù hợp cho phần lớn trẻ sơ sinh từ 0 - 3 tuổi và có thể
            được cung cấp theo yêu cầu của khách.
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="crib"
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Có</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="crib"
                className="form-radio text-blue-600"
                checked
              />
              <span className="ml-2">Không</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-lg  mb-2">
            Căn hộ này rộng bao nhiêu?
          </label>
          <span className="block font-medium mb-1">Diện tích căn hộ - không bắt buộc</span>

          <div className="flex space-x-2">  
            <input
              type="text"
              placeholder=""
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <select className="border border-gray-300 rounded-md p-2">
              <option value="m2">mét vuông</option>
              <option value="ft2">feet vuông</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomSetting;
