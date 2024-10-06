import { useState } from "react";

import {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";

import QuantitySelector from "@/components/MainHeader/QuantitySelector/QuantitySelector";
import RadioCheckBox from "./../RadioCheckBox";
import Heading from "./../Heading";
import ErrorMessage from "../../components/ErrorMessage";
import "../Component.scss";

interface RoomSettingProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

function RoomSetting({ register, errors, setValue }: RoomSettingProps) {
  const [allowChildren, setAllowChildren] = useState(true);
  const [hasCrib, setHasCrib] = useState(false);

  const [bedroomsCount, setBedroomsCount] = useState(1);
  const [bathroomsCount, setBathroomsCount] = useState(1);
  const [guestsCount, setGuestsCount] = useState(1);

  const handleDecrease = (
    setSelectedValue: React.Dispatch<React.SetStateAction<number>>,
    selectedValue: number,
    id: string
  ) => {
    setSelectedValue((preValue) => (preValue > 1 ? preValue - 1 : preValue));
    setValue(id, selectedValue);
  };

  const handleIncrease = (
    setSelectedValue: React.Dispatch<React.SetStateAction<number>>,
    selectedValue: number,
    id: string
  ) => {
    setSelectedValue((preValue) => preValue + 1);
    setValue(id, selectedValue);
  };

  return (
    <>
      <Heading title="Chi tiết chỗ nghỉ" size="3xl" bottom={6} />
      <div className="bg-white shadow p-6 rounded-lg">
        <div className="mb-8"> 
          <label className="block text-base mb-2 font-medium">
            Bao nhiêu khách có thể lưu trú?
          </label>

          <QuantitySelector
            minimun={1}
            maximun={30}
            value={guestsCount}
            onIncrease={() =>
              handleIncrease(setGuestsCount, guestsCount, "guestsCount")
            }
            onDecrease={() =>
              handleDecrease(setGuestsCount, guestsCount, "guestsCount")
            }
          />
        </div>

        <div className="mb-8">
          <label className="block text-base mb-2 font-medium">
            Có bao nhiêu phòng ngủ?
          </label>
          <QuantitySelector
            minimun={1}
            maximun={10}
            value={bedroomsCount}
            onIncrease={() =>
              handleIncrease(setBedroomsCount, bedroomsCount, "bedroomsCount")
            }
            onDecrease={() =>
              handleDecrease(setBedroomsCount, bedroomsCount, "bedroomsCount")
            }
          />
        </div>

        <div className="mb-8">
          <label className="block text-base mb-2 font-medium">
            Có bao nhiêu phòng tắm?
          </label>
          <QuantitySelector
            minimun={1}
            maximun={10}
            value={bathroomsCount}
            onIncrease={() =>
              handleIncrease(
                setBathroomsCount,
                bathroomsCount,
                "bathroomsCount"
              )
            }
            onDecrease={() =>
              handleDecrease(
                setBathroomsCount,
                bathroomsCount,
                "bathroomsCount"
              )
            }
          />
        </div>

        <div className="mb-8">
          <span className="block text-base mb-2 font-medium">
            Quý vị có tiếp đón trẻ em không?
          </span>

          <RadioCheckBox
            setSelectedValue={setAllowChildren}
            selectedValue={allowChildren}
            inputName="allowChildren"
            setValue={setValue}
          />
        </div>

        <div className="mb-8">
          <span className="block text-lg mb-2 font-medium">
            Quý vị có cung cấp nôi không?
          </span>
          <p className="text-md text-gray-500 mb-3">
            Nôi phù hợp cho phần lớn trẻ sơ sinh từ 0 - 3 tuổi và có thể được
            cung cấp theo yêu cầu của khách.
          </p>
          <RadioCheckBox
            setSelectedValue={setHasCrib}
            selectedValue={hasCrib}
            inputName="hasCrib"
            setValue={setValue}
          />
        </div>

        <div>
          <span className="block text-lg mb-2 font-medium">
            Căn hộ này rộng bao nhiêu?
          </span>
          <span className="block mb-1">Diện tích căn hộ - không bắt buộc</span>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder=""
              className="flex-grow p-2 border border-gray-300 outline-none rounded-md focus:ring-2 focus:ring-blue-500"
              {...register("area", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Vui lòng nhập kí tự số",
                },
              })}
            />

            <select className="border border-gray-300 rounded-md p-2">
              <option value="m2">mét vuông</option>
              <option value="ft2">feet vuông</option>
            </select>
          </div>

          <ErrorMessage errors={errors} id={"area"} />
        </div>
      </div>
    </>
  );
}

export default RoomSetting;
