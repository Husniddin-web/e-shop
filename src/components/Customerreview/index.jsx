import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";

import "./CustomReview.scss";

function CustomerReview({ name, review, date }) {
  return (
    <div className="coment-wrapper">
      <div className="stars">
        <div className="stars-row">
          {[...Array(5)].map((_, i) => (
            <BiSolidStar key={i} className="star-icon" />
          ))}
        </div>
        <p>
          {name} <FcApproval />
        </p>
        {date && <span className="review-date">{date}</span>}
        <span className="review-text">{review}</span>
      </div>
    </div>
  );
}

export default CustomerReview;
