import { div } from "framer-motion/client";
import React, { useState } from "react";

import "./SizePicker.scss";

const SizePicker = ({ handleResult }) => {
  const sizes = [
    { size: "M", title: "Medium" },
    { size: "S", title: "Small" },
    { size: "L", title: "Large" },
    { size: "XL", title: "Extra Large" },
    { size: "XXL", title: "Double Extra Large" },
    { size: "XS", title: "Extra Small" },
  ];
  const [selectedSize, setSelectedSize] = useState({ size: "", title: "" });

  const handleSize = (size) => {
    setSelectedSize(size);
    handleResult(size);
  };

  return (
    <>
      <div className="size-wrapper">
        {sizes.map((item, index) => (
          <div
            onClick={() => handleSize(item)}
            className={`size-item ${
              selectedSize.size == item.size ? "selected" : null
            }`}
            key={index}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default SizePicker;
