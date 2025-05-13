// ColorPicker.jsx
import React, { useState } from "react";
import { TickIcon } from "../../../assets/icons";
import "./ColorPicker.scss";
import { ProductDetailsColor } from "./constant";

const ColorChoose = ({ onSelect }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (code) => {
    setSelectedColor(code);
    if (onSelect) onSelect(code);
  };

  return (
    <div className="detail-colors-wrapper">
      {ProductDetailsColor.map((color) => (
        <div
          key={color.code}
          onClick={() => handleColorClick(color.code)}
          className="color-item"
          style={{ backgroundColor: color.code }}
        >
          {selectedColor === color.code && (
            <TickIcon color={color.name === "White" ? "#000" : "#fff"} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorChoose;
