import React, { useEffect, useState } from "react";

import ReactRangeSliderInput from "react-range-slider-input";

import "./FilterSide.scss";
import { FilterIcon } from "../../../../assets/icons";
import ArrowRightIcon from "../../../../assets/icons/src/ArrowRight.icon";
import ColorPicker from "./ColorPicker";
import { Link } from "react-router";
import { useCategories } from "../../../../hooks";
import SizePicker from "./SizePicker";
const FilterSidebar = () => {
  const [togglers, setTogglers] = useState({
    priceToggler: false,
    colorToggler: false,
    sizeToggler: false,
    dressStyleToggler: false,
  });

  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    const el = document.querySelectorAll(".range-slider__thumb");

    if (!!el[0] && !!el[1]) {
      el[0].innerHTML = `<span style="font-weight: 700; position: absolute; bottom: -20px; background-color: transparent !important">$${priceRange[0]}</span>`;
      el[1].innerHTML = `<span style="font-weight: 700; position: absolute; bottom: -20px; background-color: transparent !important">$${priceRange[1]}</span>`;
    }
  }, [priceRange]);

  const filterByClothes = [
    { filterKey: "T-shirt", title: "T-shirt" },
    { filterKey: "Shorts", title: "Shorts" },
    { filterKey: "Shirts", title: "Shirts" },
    { filterKey: "Hoodie", title: "Hoodie" },
    { filterKey: "Jeans", title: "Jeans" },
  ];

  const { data = [] } = useCategories();

  const handleToggler = (key) => {
    setTogglers({
      ...togglers,
      [key]: !togglers[key],
    });
  };

  return (
    <div className="filter-side-wrapper">
      <div className="filter-header">
        <h3>Filters</h3>
        <FilterIcon />
      </div>
      <div className="hr-line" />
      <div>
        {data.map((item, index) => (
          <Link
            to={`/category/${item.title}`}
            className="filter-item"
            key={index}
          >
            <span>{item.title}</span>
            <ArrowRightIcon />
          </Link>
        ))}
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggler("priceToggler")}
        >
          <p>Price</p>
          <div
            className={`arrow ${
              togglers.priceToggler ? "arrow-top" : "arrow-down"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div
        className={`accordion-body ${togglers.priceToggler ? "open" : "hide"}`}
      >
        <ReactRangeSliderInput
          className="custom-range"
          min={5}
          max={500}
          onInput={(range) => setPriceRange(range)}
        />
      </div>

      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggler("colorToggler")}
        >
          <p>Color</p>
          <div
            className={`arrow ${
              togglers.colorToggler ? "arrow-top" : "arrow-down"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div
        className={`accordion-body color-accordion ${
          togglers.colorToggler ? "open" : "hide"
        }`}
      >
        <ColorPicker handleResult={(res) => console.log(res)} />
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggler("sizeToggler")}
        >
          <p>Size</p>
          <div
            className={`arrow ${
              togglers.sizeToggler ? "arrow-top" : "arrow-down"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body size-accordion ${
            togglers.sizeToggler ? "open" : "hide"
          }`}
        >
          <div className="sizes">
            <SizePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
