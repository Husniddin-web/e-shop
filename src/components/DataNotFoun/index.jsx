import React from "react";
import "./Notfoun.scss";

const DataNotFound = () => {
  return (
    <div className="data-not-found">
      <div className="data-not-found__container">
        <div className="data-not-found__illustration">
          <div className="data-not-found__empty-box">
            <div className="data-not-found__empty-box-lid"></div>
            <div className="data-not-found__empty-box-container"></div>
          </div>
          <div className="data-not-found__search-icon"></div>
        </div>
        <h2 className="data-not-found__title">No Data Found</h2>
        <p className="data-not-found__message">
          We couldn't find the data you're looking for. Please try a different
          search or check back later.
        </p>
        <div className="data-not-found__actions">
          <a href="/" className="data-not-found__button">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataNotFound;
