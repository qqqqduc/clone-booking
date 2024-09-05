import "./ListingSetting.scss";

interface ListingServicesProps {}

function ListingServices({}: ListingServicesProps) {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dịch vụ tại chỗ nghỉ</h1>

        {/* Bữa sáng */}
        <div className="bg-white shadow p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 border-bottom-soft pb-4">Bữa sáng</h2>
          <p className="mb-4 font-medium">Quý vị có phục vụ bữa sáng cho khách không?</p>
          <div>
            <label className="flex items-center mb-2">
              <input type="radio" name="breakfast" className="mr-2 w-[16px] h-[16px]" /> Có
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="breakfast"
                checked
                className="mr-2 w-[16px] h-[16px]"
              />
              Không
            </label>
          </div>
        </div>

        {/* Chỗ đậu xe */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 border-bottom-soft pb-4">Chỗ đậu xe</h2>
          <p className="mb-4 font-medium">Quý vị có chỗ đậu xe cho khách không?</p>
          <div>
            <label className="flex items-center mb-2">
              <input type="radio" name="parking" className="mr-2 w-[16px] h-[16px]" /> Có, miễn
              phí
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="parking" className="mr-2 w-[16px] h-[16px]" /> Có, tính
              phí
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="parking"
                className="mr-2 w-[16px] h-[16px]"
                checked
              />
              Không
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingServices;
