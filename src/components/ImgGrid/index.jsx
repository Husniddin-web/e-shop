import React from "react";

import "./img-grid.scss";

function ImageGrid({ images }) {
  return (
    <div className="img-wrapper">
      {images.map((row, index) => (
        <div className="img-row" key={index}>
          {row.map(({ src, alt, style }, i) => (
            <div key={i} className="img-container">
              <img src={src} alt={alt} className="row-img" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
