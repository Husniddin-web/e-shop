import React from "react";
import "./ProductDetailReview.scss";
import { FilterIcon } from "../../../assets/icons";
import { Card, CustomerReview } from "../../../components";
import { useParams } from "react-router";
import { useProductByFilter, useProductById } from "../../../hooks/useProducts";
import CardSkeleton from "../../../components/CardSkeltion";

const mockReviews = [
  { name: "Alice", review: "Great product!", date: "May 10, 2025" },
  { name: "Bob", review: "Nice quality and fast delivery." },
  { name: "Charlie", review: "Could be better.", date: "May 5, 2025" },
  { name: "Alice", review: "Great product!", date: "May 10, 2025" },
  { name: "Bob", review: "Nice quality and fast delivery." },
  { name: "Charlie", review: "Could be better.", date: "May 5, 2025" },
];

const ProductReviewDetails = () => {
  const { id } = useParams();
  const { data: product = {}, isLoading: productLoading } = useProductById(id);

  const { data: filteredData = [], isLoading: filterLoading } =
    useProductByFilter(
      product?.category ? `?category=${product.category}` : ""
    );

  return (
    <div className="product-review-wrapper">
      <div className="review-header">
        <div className="all-review-text">
          All reviews <span className="reveiw-count">(456)</span>
        </div>
        <div className="header-btns">
          <div className="filter">
            <FilterIcon />
          </div>
          <div className="time-btn">Latest</div>
          <div className="write-review">Write review</div>
        </div>
      </div>

      <div className="reviews-wrapper">
        {mockReviews.map((r, i) => (
          <CustomerReview
            key={i}
            name={r.name}
            review={r.review}
            date={r.date}
          />
        ))}
      </div>

      <div className="get-allpreview">
        <button>Load more reviews</button>
      </div>

      <h2 className="similar-produc-title">You might also like</h2>
      <div className="similar-products">
        {filterLoading || productLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          filteredData
            .filter((item) => item.id !== id)
            .map((item) => <Card key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default ProductReviewDetails;
