import React, { useState } from "react";

import "./SizePicker.scss";

const SizeChoose = ({ sizes = [] }) => {
  const [selectedSize, setSelecetSize] = useState("");
  const handleSize = (size) => {
    setSelecetSize(size);
  };
  return (
    <>
      <div className="size-button-wrapper">
        {sizes.map((item, index) => (
          <div
            onClick={() => handleSize(item)}
            className={`size-item ${selectedSize == item ? "selected" : null}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default SizeChoose;
