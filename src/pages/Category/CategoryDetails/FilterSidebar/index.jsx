import React, { useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import { RxCross2 } from "react-icons/rx"; // Close icon
import { FilterIcon } from "../../../../assets/icons";
import ArrowRightIcon from "../../../../assets/icons/src/ArrowRight.icon";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import { Link, useNavigate, useParams } from "react-router";
import { useCategories } from "../../../../hooks";
import "./FilterSide.scss";

const FilterSidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const [togglers, setTogglers] = useState({
    priceToggler: false,
    colorToggler: false,
    sizeToggler: false,
    dressStyleToggler: false,
  });

  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedSize, setSelectedSize] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const { data = [] } = useCategories();

  const handleSize = (size) => {
    setSelectedSize(size.size);
  };

  useEffect(() => {
    const el = document.querySelectorAll(".range-slider__thumb");

    if (el[0] && el[1]) {
      el[0].innerHTML = `<span style="font-weight: 700;color:white; backgroundcolor:inherit; position: absolute; bottom: -20px;">$${priceRange[0]}</span>`;
      el[1].innerHTML = `<span style="font-weight: 700; position: absolute;color:white; bottom: -20px;">$${priceRange[1]}</span>`;
    }
  }, [priceRange]);

  const handleToggler = (key) => {
    setTogglers((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFilter = () => {
    const currentParams = new URLSearchParams();

    if (selectedSize) {
      currentParams.set("size", selectedSize);
    }

    if (priceRange[1] < 500) {
      currentParams.set("price", priceRange[1]);
    }

    const queryString = currentParams.toString();

    const url = `/category/${params.categoryId}${
      queryString ? `?${queryString}` : ""
    }`;

    navigate(url);
    setIsMobileOpen(false);
  };

  return (
    <div className={`filter-side-wrapper ${isMobileOpen ? "open" : ""}`}>
      <div className="close-btn-mobile" onClick={() => setIsMobileOpen(false)}>
        <RxCross2 size={24} />
      </div>

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
            <SizePicker handleResult={handleSize} />
          </div>
        </div>
      </div>
      <div className="apply-button">
        <button onClick={handleFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
