import React, { useState } from "react";

interface CheckBoxProps {
  label: string;
  onChange: (label: string, isChecked: boolean) => void; // Thêm prop onChange
}

function CheckBox({ label, onChange }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(label, checked); 
  };

  return (
    <label className="flex items-center mb-2">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
}

export default CheckBox;
