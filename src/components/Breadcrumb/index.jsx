import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={name}> / {decodeURIComponent(name)}</span>
        ) : (
          <Link key={name} to={routeTo}>
            {" / "}
            {decodeURIComponent(name)}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
