import React from "react";
import "./slider.css";

interface IProps {
  plantKey: number;
  handleDeceased: (plantIndex: number) => void;
  deceased: boolean;
}

export const Slider: React.FC<IProps> = ({
  plantKey,
  handleDeceased,
  deceased
}) => {
  return (
    <label className="switch">
      <input
        readOnly
        type="checkbox"
        checked={deceased}
        onClick={() => handleDeceased(plantKey)}
      ></input>
      <span className="slider round"></span>
    </label>
  );
};
