import React from "react";
import "./NewArrivals.scss";
import { useProducts } from "../../../../hooks";
import { Card, CardSkelton } from "../../../../components";

function NewArrivals() {
  const { data, isLoading } = useProducts();

  return (
    <div className="container">
      <div className="new-arrivals-item">
        <h2>NEW ARRIVALS</h2>
      </div>

      <div className="item-cards">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <CardSkelton key={i} />)
          : data
              ?.slice(0, 8)
              .map((product) => <Card key={product.id} product={product} />)}
      </div>

      <hr />
    </div>
  );
}

export default NewArrivals;
