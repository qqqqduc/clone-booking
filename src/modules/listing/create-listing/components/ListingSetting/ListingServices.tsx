import { useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

import RadioCheckBox from "./../RadioCheckBox";
import "../Component.scss";

interface ListingServicesProps {
  setValue: UseFormSetValue<FieldValues>;
}

function ListingServices({
  setValue
}: ListingServicesProps) {
  const [hasBreakfast, setHasBreakfast] = useState(false);
  const [hasParking, setHasParking] = useState(true);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dịch vụ tại chỗ nghỉ</h1>

        {/* Bữa sáng */}
        <div className="bg-white shadow p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold border-bottom-soft pb-8">
            Bữa sáng
          </h2>
          <p className="mb-4 font-medium">
            Quý vị có phục vụ bữa sáng cho khách không?
          </p>
          <RadioCheckBox
            setSelectedValue={setHasBreakfast}
            selectedValue={hasBreakfast}
            inputName="hasBreakfast"
            isHorizontal
            setValue={setValue}
          />
        </div>

        {/* Chỗ đậu xe */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold border-bottom-soft pb-8">
            Chỗ đậu xe
          </h2>
          <p className="mb-4 font-medium">
            Quý vị có chỗ đậu xe cho khách không?
          </p>
          <RadioCheckBox
            setSelectedValue={setHasParking}
            selectedValue={hasParking}
            inputName="hasParking"
            options={[
              { label: "Có", value: "yes", checked: true },
              { label: "Không", value: "no", checked: false },
            ]}
            isHorizontal
            setValue={setValue}
          />
        </div>
      </div>
    </>
  );
}

export default ListingServices;
