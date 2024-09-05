import "./BasicInfo.scss";
interface ListingNameProps {}
function ListingName({}: ListingNameProps) {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Tên chỗ nghỉ Quý vị?
        </h1>
      </div>

      <div className="py-12 px-4">
        <label className="block text-gray-700 mb-1" htmlFor="propertyName">
          Tên chỗ nghỉ
        </label>

        <input
          type="text"
          id="propertyName"
          className="basic-info-input mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tên chỗ nghỉ"
        />
      </div>
    </>
  );
}

export default ListingName;
