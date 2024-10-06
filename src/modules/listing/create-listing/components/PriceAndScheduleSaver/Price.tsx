import Heading from "../Heading";

interface PriceProps {}

function Price({}: PriceProps) {
  return (
    <>
      <Heading title="Giá mỗi đêm" size="3xl" bottom={6} />

      <div className="bg-white shadow py-6 px-4 rounded-lg">
        <p className="text-base font-bold mb-4">
          Quý vị muốn thu bao nhiêu tiền mỗi đêm?
        </p>

        <div className="relative">
          <span className="block mb-1 text-sm font-medium">
            Số tiền khách trả
          </span>
          <div className="flex items-center border border-blue-500 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
            <span className="text-gray-600">VND</span>
            <input
              id="priceInput"
              type="text"
              className="ml-2 flex-1 focus:outline-none"
              placeholder="Nhập số tiền"
            />
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Bao gồm các loại thuế, phí và hoa hồng.
        </p>
      </div>
    </>
  );
}

export default Price;
