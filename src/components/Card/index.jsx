import React from "react";

import "./Product.scss";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router";

const Card = ({ product }) => {
  const { images, title, price, rating, id } = product;
  const getRating = () => {
    const res = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      res.push(
        <FaStar
          color="gold"
          key={`full-${i}`}
          className="product-rating-star"
        />
      );
    }

    if (rating % 1 > 0.4) {
      res.push(
        <FaStarHalf color="gold" key="half" className="product-rating-star" />
      );
    }
    return res;
  };

  return (
    <div>
      <img src={images[0]} alt={title} className="product-image" />
      <div className="card-header">
        <FaRegHeart />
        <MdAddShoppingCart />
      </div>
      <div className="product-card">
        <div className="product-info">
          <Link key={id} to={`/productDetail/${id}`}>
            <h3 className="product-title">{title}</h3>
          </Link>
          <div className="product-rating">
            {getRating()}
            <span className="product-rating-value">{rating}/5</span>
          </div>
          <div className="product-price">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
