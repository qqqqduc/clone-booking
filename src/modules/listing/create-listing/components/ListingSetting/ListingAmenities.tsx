import "./ListingSetting.scss";
import QuantitySelector from "@/components/MainHeader/QuantitySelector/QuantitySelector";

interface ListingAmenitiesProps {}

function ListingAmenities({}: ListingAmenitiesProps) {
  return (
    <>
      <h1 className="text-3xl mb-8 font-bold text-gray-800">
        Khách hàng có thể sử dụng gì tại chỗ nghỉ?
      </h1>
      <div className="bg-white custom-room-setting-shadow pt-4">
        <h3 className="font-semibold text-lg pl-4 mt-4">Tiện nghi chung</h3>

        <div className="space-y-2 px-4 py-2">
          <div className="pb-6 border-bottom-soft">
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Điều hòa nhiệt độ</span>
            </label>
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Hệ thống sưởi</span>
            </label>
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">WiFi miễn phí</span>
            </label>
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Trạm sạc xe điện</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg pl-4 mt-4">
            Nấu nướng và giặt rửa
          </h3>
          <div className="space-y-2 px-4 py-2">
            <div className="pb-6 border-bottom-soft">
              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Bếp</span>
              </label>
              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Bếp nhỏ</span>
              </label>
              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Máy giặt</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg pl-4 mt-4">Giải trí</h3>
          <div className="space-y-2 px-4 py-2">
            <div className="pb-6 border-bottom-soft">
              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">TV màn hình phẳng</span>
              </label>
              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Hồ bơi</span>
              </label>
              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Bể sục</span>
              </label>

              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Minibar</span>
              </label>

              <label className="flex items-center mb-[6px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Phòng xông hơi</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg pl-4 mt-4">
            Không gian ngoài trời và tầm nhìn
          </h3>
          <div className="space-y-2 px-4 pt-2 pb-6" >
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Ban công</span>
            </label>
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Nhìn ra vườn</span>
            </label>
            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Sân thượng / hiên</span>
            </label>

            <label className="flex items-center mb-[6px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Tầm nhìn ra khung cảnh</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingAmenities;
