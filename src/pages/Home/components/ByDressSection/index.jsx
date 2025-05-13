import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Img1 from "../../../../assets/bd1_item.png";
import Img2 from "../../../../assets/bd2_item.png";
import Img3 from "../../../../assets/bd3_item.png";
import Img4 from "../../../../assets/bd4_item.png";

import "./ByDress.scss";
import ImageGrid from "../../../../components/ImgGrid";
import { CustomerReview } from "../../../../components";

function ByDress() {
  const imageData = [
    [
      { src: Img1, alt: "bd1" },
      { src: Img2, alt: "bd2" },
    ],
    [
      { src: Img3, alt: "bd3" },
      { src: Img4, alt: "bd4" },
    ],
  ];

  const reviews = [
    {
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co...",
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge...",
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces...",
    },
  ];

  return (
    <div className="container">
      <div className="dress-wrapper">
        <h3>BROWSE BY DRESS STYLE</h3>
        <ImageGrid images={imageData} />
      </div>

      <div className="coments">
        <div className="customers">
          <h3>OUR HAPPY CUSTOMERS</h3>
          <div className="icons">
            <GoArrowLeft />
            <GoArrowRight />
          </div>
        </div>
        <div className="our-happy">
          {reviews.map((r, i) => (
            <CustomerReview key={i} name={r.name} review={r.review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ByDress;
