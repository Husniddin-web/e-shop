import React, { useState, useEffect } from "react";
import { Trash, ShoppingBag } from "lucide-react";

import "./Cart.scss";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const getCarts = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setItems(getCarts());
  }, []);

  const updateQuantity = (itemId, selectedColor, selectedSize, change) => {
    const updatedItems = items.map((item) => {
      if (
        item.id === itemId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
      ) {
        const newCount = Math.max(1, item.count + change);
        return { ...item, count: newCount };
      }
      return item;
    });

    setItems(updatedItems);
    saveCart(updatedItems);
  };

  const removeItem = (itemId, selectedColor, selectedSize) => {
    const updatedItems = items.filter(
      (item) =>
        !(
          item.id === itemId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
        )
    );

    setItems(updatedItems);
    saveCart(updatedItems);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.oldPrice * item.count,
    0
  );
  const discount = items.reduce(
    (sum, item) => sum + (item.oldPrice - item.price) * item.count,
    0
  );
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="shopping-cart">
      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-container">
        <div className="cart-items">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-image">
                  <img src={item.images[0]} alt={item.title} />
                </div>

                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="item-size">Size: {item.selectedSize}</p>
                  <p className="item-color">
                    Color:
                    <span
                      className="color-preview"
                      style={{ backgroundColor: item.selectedColor }}
                    />
                  </p>
                  <p className="item-price">${item.price}</p>
                </div>

                <div className="item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedColor,
                          item.selectedSize,
                          -1
                        )
                      }
                      className="quantity-btn"
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.count}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedColor,
                          item.selectedSize,
                          1
                        )
                      }
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      removeItem(item.id, item.selectedColor, item.selectedSize)
                    }
                    className="remove-btn"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-details">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="summary-item discount">
              <span>
                Discount (-{Math.round((discount / subtotal) * 100) || 0}%)
              </span>
              <span>-${discount}</span>
            </div>

            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>

            <div className="summary-item total">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <div className="promo-code">
            <div className="promo-input-container">
              <input
                type="text"
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="apply-btn">Apply</button>
            </div>
          </div>

          <button
            className="checkout-btn"
            onClick={() => toast.success("Succesfully checkout")}
          >
            Go to Checkout <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
