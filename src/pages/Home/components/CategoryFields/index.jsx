import React from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../../../hooks";

import "./CategoryFields.scss";

const CategoryFields = () => {
  const { data = [], isLoading } = useCategories();

  if (isLoading)
    return (
      <div className="container">
        <div className="category-fields">
          <p>Loading categories...</p>;
        </div>
      </div>
    );

  return (
    <div className="container">
      <div className="category-fields">
        <div className="category-header">
          <h3>Category</h3>
        </div>
        <div className="category-cards">
          {data.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.title}`}
              className="category-box"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFields;
