import React, { useState } from "react";
import "./select.css";

interface IProps {
  options: Object;
  selectName: string;
  handleFilterOptions: (family: string, genus: string) => void;
}

export const Select: React.FC<IProps> = ({
  options,
  selectName,
  handleFilterOptions
}) => {
  const [value, setValue] = useState("all");
  const handleSelected = (name: string, selection: string) => {
    setValue(selection);
    handleFilterOptions(name, selection);
  };

  return (
    <select
      name={selectName}
      className="select-css"
      value={value}
      onChange={(e) => handleSelected(e.target.name, e.target.value)}
    >
      {Object.values(options).map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
