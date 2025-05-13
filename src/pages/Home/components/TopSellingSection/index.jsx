import React from "react";
import "./TopSelling.scss";
import { Card } from "../../../../components";

function TopSelling() {
  const topSellingProducts = [
    {
      id: 1,
      title: "VERTICAL STRIPED SHIRT",
      images: ["/src/assets/ts1_item.png"],
      rating: 5.0,
      price: 212,
      oldPrice: 232,
      discount: "-20%",
    },
    {
      id: 2,
      title: "COURAGE GRAPHIC T-SHIRT",
      images: ["/src/assets/ts2_item.png"],
      rating: 4.0,
      price: 145,
    },
    {
      id: 3,
      title: "LOOSE FIT BERMUDA SHORTS",
      images: ["/src/assets/ts3_item.png"],
      rating: 3.0,
      price: 80,
    },
    {
      id: 4,
      title: "FADED SKINNY JEANS",
      images: ["/src/assets/ts4_item.png"],
      rating: 4.5,
      price: 210,
    },
  ];

  return (
    <div className="container">
      <div className="top-selling-h2">
        <h2>Top Selling</h2>
      </div>
      <div className="item-cards">
        {topSellingProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="top-selling-btn">
        <button className="">View All</button>
      </div>
    </div>
  );
}

export default TopSelling;
