import "./BasicInfo.scss";

interface ListingAddressProps {}

function ListingAddress({}: ListingAddressProps) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Chỗ nghỉ Quý vị muốn đăng ký nằm ở đâu?
      </h2>
      <p className="text-gray-600 mb-6">
        Quý vị hãy đảm bảo cung cấp địa chỉ chính xác – thông tin này sẽ khó
        thay đổi sau đó.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="street">
          Tên đường và số nhà
        </label>
        <input
          id="street"
          type="text"
          className="w-full outline-none border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>


      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="postal-code">
          Mã bưu chính
        </label>
        <input
          id="postal-code"
          type="text"
          className="w-full outline-none border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="city">
          Thành phố
        </label>
        <input
          id="city"
          type="text"
          className="w-full outline-none border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>
    </>
  );
}

export default ListingAddress;
