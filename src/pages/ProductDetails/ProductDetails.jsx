import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductById } from "../../hooks/useProducts";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Button, Loading } from "../../components";
import ColorChoose from "./ColorPicker";
import SizeChoose from "./SizePicker";
import ProductReviewDetails from "./ProductDetailReview";
import { saveToLocalStorage } from "../../utils/localstorge";

import "./ProductDetails.scss";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const { data = [], isLoading } = useProductById(id);
  const navigate = useNavigate();

  const [image, setImage] = useState(0);
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const getRating = (rating) => {
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

  const handelImage = (imageNumber) => setImage(imageNumber);
  const handleCountInc = () => setCount((prev) => prev + 1);
  const handleCountDec = () => setCount((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select color and size");
      return;
    }

    const productToSave = {
      ...data,
      count,
      selectedColor,
      selectedSize,
    };
    toast.success("Succesfully added to cart ");
    saveToLocalStorage(productToSave);
    navigate("/");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <div className="product-details-wrapper">
        <div className="product-url">
          Home / Product Details / {data.category}
        </div>
        <div className="details-wrapper">
          <div className="product-images">
            <div className="images-left">
              {data.images.slice(0, 3).map((url, index) => (
                <img
                  key={index}
                  src={url || ""}
                  alt="image"
                  onClick={() => handelImage(index)}
                  className={image == index ? "choosen" : null}
                />
              ))}
            </div>
            <div className="images-right">
              <img src={data?.images[image]} alt="" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-title">
              <h2>{data.title}</h2>
            </div>
            <div className="rating">
              {getRating(data.rating)} {data.rating}/5
            </div>
            <div className="price">
              <span className="new-price">${data.price}</span>
              <span className="old-price">${data.oldPrice}</span>
              <span className="discount">
                -
                {Math.round(
                  ((data.oldPrice - data.price) / data.oldPrice) * 100
                )}
                %
              </span>
            </div>
            <div className="description">
              <p>{data.description}</p>
            </div>
            <div className="hr-line" />
            <div className="colors">
              <p className="select-color-header">Select color</p>
              <ColorChoose onSelect={setSelectedColor} />
            </div>
            <div className="hr-line" />
            <div className="sizes">
              <SizeChoose sizes={data.size} onSelect={setSelectedSize} />
            </div>
            <div className="hr-line"></div>
            <div className="add-cart">
              <div className="count-product">
                <button disabled={count === 1} onClick={handleCountDec}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={handleCountInc}>+</button>
              </div>
              <div className="add-button">
                <Button size={"lg"} px={25} py={10} onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-reviews">
          <ProductReviewDetails />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
