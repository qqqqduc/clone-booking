import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

import Heading from "../Heading";
import Input from "../Input";
import "../Component.scss";

interface ListingNameProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

function ListingName({
  register,
  errors 
}: ListingNameProps) {
  return (
    <>
      <Heading  
        title = "Tên chỗ nghỉ quý vị" 
        size = "3xl"
        bottom = {6}
      />
      <Input 
        title="Tên chỗ nghỉ"
        id="title" 
        register={register}
        errors={errors}
        config={{
          required: "Tên chỗ nghỉ không được để trống",
          minLength: {
            value: 3,
            message: "Tên chỗ nghỉ phải dài hơn 3 kí tự",
          },
        }}
      />
    </>
  );
}

export default ListingName;
