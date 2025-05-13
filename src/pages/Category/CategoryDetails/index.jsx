import React, { useState } from "react";
import "react-range-slider-input/dist/style.css";
import FilterSidebar from "./FilterSidebar";
import { BreadCrumb } from "../../../components";
import CategoryProducts from "./CategoryProducts";
import { FilterIcon } from "../../../assets/icons";
import "./Category.scss";

const CategoryDetails = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="container">
      <BreadCrumb />

      {!isFilterOpen && (
        <div
          className="filter-toggle-mobile"
          onClick={() => setIsFilterOpen(true)}
        >
          <FilterIcon />
          <span>Filter</span>
        </div>
      )}

      <div className="category-details-wrapper">
        <FilterSidebar
          isMobileOpen={isFilterOpen}
          setIsMobileOpen={setIsFilterOpen}
        />
        <div className="category-products">
          <CategoryProducts />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
