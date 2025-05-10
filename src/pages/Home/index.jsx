import React from "react";
import {
  ByDressSection,
  MainSection,
  NewArrivalsSection,
  TopSellingSection,
} from "./components";

import { useCategories, useProducts } from "../../hooks";
import CategoryFields from "./components/CategoryFields";

const HomePage = () => {
  return (
    <div>
      <MainSection />
      <CategoryFields />
      <NewArrivalsSection />
      <TopSellingSection />
      <ByDressSection />
    </div>
  );
};

export default HomePage;
