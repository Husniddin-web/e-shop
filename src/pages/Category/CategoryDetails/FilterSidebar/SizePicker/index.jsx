import { div } from "framer-motion/client";
import React from "react";

import "./SizePicker.scss";

const SizePicker = () => {
  const sizes = [
    { size: "M", title: "Medium" },
    { size: "S", title: "Small" },
    { size: "L", title: "Large" },
    { size: "XL", title: "Extra Large" },
    { size: "XXL", title: "Double Extra Large" },
    { size: "XS", title: "Extra Small" },
  ];

  return (
    <>
      <div className="size-wrapper">
        {sizes.map((item, index) => (
          <div className="size-item" key={index}>
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default SizePicker;
