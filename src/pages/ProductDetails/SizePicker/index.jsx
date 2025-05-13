// SizePicker.jsx
import React, { useState } from "react";
import "./SizePicker.scss";

const SizeChoose = ({ sizes = [], onSelect }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSize = (size) => {
    setSelectedSize(size);
    if (onSelect) onSelect(size);
  };

  return (
    <div className="size-button-wrapper">
      {sizes.map((item, index) => (
        <div
          onClick={() => handleSize(item)}
          className={`size-item ${selectedSize === item ? "selected" : ""}`}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SizeChoose;
