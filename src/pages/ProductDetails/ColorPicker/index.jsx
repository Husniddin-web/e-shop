import React, { useState } from "react";
import { TickIcon } from "../../../assets/icons";

import "./ColorPicker.scss";
import { ProductDetailsColor } from "./constant";

const ColorChoose = () => {
  const [selectedColor, setSelectColor] = useState("");
  const handleColorClick = (code) => {
    setSelectColor(code);
  };
  return (
    <div>
      <div className="detail-colors-wrapper">
        {ProductDetailsColor.map((color) => {
          return (
            <div
              onClick={() => handleColorClick(color.code)}
              className="color-item"
              style={{
                backgroundColor: color.code,
              }}
              key={color.code}
            >
              {selectedColor == color.code ? (
                <TickIcon color={color.name === "White" ? "#000" : "#fff"} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorChoose;
