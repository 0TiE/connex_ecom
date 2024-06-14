import Header from "./Header";
import ProductSuppliers from "./ProductSuppliers";
import React from "react";
import PromoCarousel from "./Carousel/PromoCarousel";
import TrendingProducts from "./TrendingProducts/TrendingProducts.js";


function Home() {
  return (
    <>
      <Header />
      <PromoCarousel />
      
      {/* <Categroies/> */}
      <ProductSuppliers />
      <TrendingProducts />
      
    </>
  );
}
export default Home;
