import { FieldValues, UseFormSetValue } from "react-hook-form";

interface RadioCheckBoxProps {
  selectedValue: any;
  setSelectedValue: any;
  inputName: string;
  options?: any;
  isHorizontal?: boolean;
  setValue: UseFormSetValue<FieldValues>;
}

function RadioCheckBox({
  selectedValue,
  setSelectedValue,
  inputName,
  isHorizontal = false,
  options = [
    { label: "Có", value: "yes", checked: false },
    { label: "Không", value: "no", checked: true },
  ],
  setValue
}: RadioCheckBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedValue(e.target.value === "yes");
    }
    setValue(inputName, selectedValue);
  };

  return (
    <div className={isHorizontal ? "flex items-center space-x-4" : ""}>
      {options.map((option: any, index: number) => (
        <label key={index} className="flex items-center mb-2">
          <input
            type="radio"
            name={inputName}
            value={option.value}
            className="mr-2 w-[16px] h-[16px]"
            defaultChecked={option.checked}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioCheckBox;
