import React from "react";
import { useLocation, useParams } from "react-router";

import "./CategoryProducts.scss";
import { useProductByFilter } from "../../../../hooks";
import { Card, CardSkelton, DataNotFound } from "../../../../components";

const CategoryProducts = () => {
  const params = useParams();
  const location = useLocation();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useProductByFilter(`?category=${params.categoryId}`);

  if (isError) return <DataNotFound />;
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
