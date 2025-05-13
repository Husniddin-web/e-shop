import React, { useState, useEffect } from "react";
import "./Header.scss";
import { MdClear } from "react-icons/md";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getCarts } from "../../utils/localstorge";

function Header() {
  const [isFragmentVisible, setIsFragmentVisible] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  const handleClearClick = () => {
    setIsFragmentVisible(false);
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
      if (window.innerWidth > 770) {
        setIsBurgerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const carts = getCarts();

  console.log(carts.length);
  return (
    <header>
      {isFragmentVisible && (
        <div className="header-top">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#">Sign Up Now</a>
          </p>
          <MdClear className="clear-btn" onClick={handleClearClick} />
        </div>
      )}
      <div className="container">
        <div className="navbar-wrapper">
          {isMobile && (
            <div className="burger-icon" onClick={toggleBurger}>
              <FiMenu />
            </div>
          )}

          <Link to="/" className="logo">
            <h3>SHOP.CO</h3>
          </Link>

          <div className={`nav-menu ${isBurgerOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/on-sale">On Sale</Link>
              </li>
              <li>
                <Link to="/new-arrivals">New Arrivals</Link>
              </li>
              <li>
                <Link to="/brands">Brands</Link>
              </li>
            </ul>
          </div>

          <div className="search-input desktop-search">
            <BiSearch />
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className="nav-actions">
            {isMobile ? (
              <>
                <BiSearch className="mobile-search-icon" />
                <Link to={"/card"}>
                  <div className="card-icon">
                    <BiCart />
                    <div className="cart-br">{carts.length}</div>
                  </div>
                </Link>
                <CgProfile />
              </>
            ) : (
              <>
                <Link to={"/card"}>
                  {" "}
                  <div className="card-icon">
                    <BiCart />
                    <div className="cart-br">{carts.length}</div>
                  </div>
                </Link>
                <CgProfile />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
