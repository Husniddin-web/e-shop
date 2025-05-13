import React from "react";
import { TfiEmail } from "react-icons/tfi";
import "./Footer.scss";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <h3>
          STAY UPTO DATE ABOUT <br className="hide-on-mobile" />
          OUR LATEST OFFERS
        </h3>
        <div className="top-footer-items">
          <div className="input-wrapper">
            <input type="email" placeholder="Enter your email address" />
            <TfiEmail className="input-icon" />
          </div>
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="hero-footer">
        <div className="container">
          <div className="paragrif-wrapper">
            <div className="footer-paragrif shop-info">
              <span>SHOP.CO</span>
              <p>
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="footer-icons">
                <BsTwitter />
                <BsFacebook />
                <BsInstagram />
                <BsGithub />
              </div>
            </div>
            <div className="footer-paragrif">
              <p className="section-title">COMPANY</p>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div className="footer-paragrif">
              <p className="section-title">HELP</p>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="footer-paragrif">
              <p className="section-title">FAQ</p>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
            <div className="footer-paragrif">
              <p className="section-title">RESOURCES</p>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
          <hr />
          <div className="footer-finish">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="payment-cards">
              <img src="/src/assets/visa.png" alt="Visa" />
              <img src="/src/assets/mastercard.png" alt="Mastercard" />
              <img src="/src/assets/paypal.png" alt="PayPal" />
              <img src="/src/assets/pay.png" alt="Pay" />
              <img src="/src/assets/googlePay.png" alt="Google Pay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
