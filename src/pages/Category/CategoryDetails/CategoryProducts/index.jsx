import React from "react";
import { useLocation, useParams } from "react-router";

import { useProductByFilter } from "../../../../hooks";
import { Card, CardSkelton } from "../../../../components";

import "./CategoryProducts.scss";
const CategoryProducts = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const {
    data = [],
    isLoading,
    isError,
  } = useProductByFilter(
    `?category=${params.categoryId}${
      location.search ? `&${location.search.substring(1)}` : ""
    }`
  );

  if (isError)
    return (
      <div className="not-found">
        <h1>Some thing went wrong</h1>
      </div>
    );
  return (
    <>
      <div className="category-section">
        <div className="category-cards-wrapper">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <CardSkelton key={i} />)
            : data?.map((product) => (
                <Card key={product.id} product={product} />
              ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
