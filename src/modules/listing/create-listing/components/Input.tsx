import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import "./Component.scss";

interface InputProps {
  title?: string;
  id: string;
  type?: string;
  config?: object;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  placeholder?: string;
}

function Input({
  title = "",
  id,
  type = "text",
  config,
  register,
  errors,
  placeholder = "",
}: InputProps) {

  return (
    <>
      <label className="block text-gray-700 mb-1 font-medium" htmlFor={id}>
        {title}
      </label>

      <input
        type={type}
        id={id}
        {...register(id, config)}
        className={`
           w-full outline-none border border-gray-300 rounded-md p-2
          ${!errors[id] ? "focus:ring-2 focus:ring-blue-500" : ""}
          ${errors[id] ? "border-rose-500" : ""}
          `}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} id={id} />
    </>
  );
}

export default Input;
