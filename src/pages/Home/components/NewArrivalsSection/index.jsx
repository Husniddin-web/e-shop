import React, { useState } from "react";
import "./NewArrivals.scss";
import { useProducts } from "../../../../hooks";
import { Button, Card, CardSkelton } from "../../../../components";

function NewArrivals() {
  const { data, isLoading } = useProducts();
  const [showAll, setShowAll] = useState(false); // state to toggle full product list

  const visibleProducts = showAll ? data : data?.slice(0, 4);

  return (
    <div className="container">
      <div className="new-arrivals-item">
        <h2>NEW ARRIVALS</h2>
      </div>

      <div className="item-cards">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <CardSkelton key={i} />)
          : visibleProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
      </div>

      <div className="show-all-btn">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide" : "View All"}
        </button>
      </div>
      <hr />
    </div>
  );
}

export default NewArrivals;
