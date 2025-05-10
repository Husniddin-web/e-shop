import React, { useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";

import "react-range-slider-input/dist/style.css";
import "./Category.scss";
import FilterSidebar from "./FilterSidebar";
import { BreadCrumb } from "../../../components";
import CategoryProducts from "./CategoryProducts";

const CategoryDetails = () => {
  return (
    <div className="container">
      <BreadCrumb />
      <div className="category-details-wrapper">
        <div>
          <FilterSidebar />
        </div>
        <div className="category-products">
          <CategoryProducts />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
