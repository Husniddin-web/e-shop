import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="product-card">
      <Skeleton height={200} width={295} />
      <div className="product-info">
        <Skeleton height={20} width="80%" />
        <Skeleton height={15} width="60%" />
        <Skeleton height={20} width="40%" />
      </div>
    </div>
  );
};

export default CardSkeleton;
