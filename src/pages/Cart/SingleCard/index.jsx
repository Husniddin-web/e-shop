import React from "react";
import "./SingleCard.scss";

const CardSingle = ({ data }) => {
  const { title, price, oldPrice, count, selectedColor, selectedSize, images } =
    data;

  return (
    <div className="single-card">
      <img src={images[0]} alt={title} className="product-image" />
      <div className="card-info">
        <h4>{title}</h4>
        <p>Size: {selectedSize}</p>
        <p>
          Color:{" "}
          <span
            style={{ backgroundColor: selectedColor }}
            className="color-preview"
          />
        </p>
        <p>Quantity: {count}</p>
        <div className="price">
          <span className="new-price">${price}</span>
          <span className="old-price">${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSingle;
