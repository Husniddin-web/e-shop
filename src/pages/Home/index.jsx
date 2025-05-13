import React from "react";
import {
  ByDressSection,
  MainSection,
  NewArrivalsSection,
  TopSellingSection,
} from "./components";

import CategoryFields from "./components/CategoryFields";
import BrandsAd from "./components/BrandsAdSection";

const HomePage = () => {
  return (
    <div>
      <MainSection />
      <BrandsAd />
      <CategoryFields />
      <NewArrivalsSection />
      <TopSellingSection />
      <ByDressSection />
    </div>
  );
};

export default HomePage;
