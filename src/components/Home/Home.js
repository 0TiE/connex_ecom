import Categroies from "./Categoies";
import Header from "./Header";
import ProductSuppliers from "./ProductSuppliers";
import PromoCarousel from "./PromoCarousel";
import React from "react";
import TrendingProducts from "./TrendingProducts";

function Home() {
  return (
    <>
      <Header />
      <PromoCarousel />
      <ProductSuppliers />
      <Categroies />
    <TrendingProducts/>
    </>
  );
}
export default Home;
