import React from "react";
import "./Button.scss";
import { btnTypes, btnSize } from "./constants";

const Button = (props) => {
  const {
    type = btnTypes.primary,
    size = btnSize.md,
    children,
    px = 12,
    py = 5,
  } = props;
  return (
    <button
      className={`button btn-${type} btn-${size}`}
      style={{ padding: `${py}px ${px}px ` }}
    >
      {children}
    </button>
  );
};

export default Button;
