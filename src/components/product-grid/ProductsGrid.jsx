import React, { useEffect, useState } from "react";
import "./products-grid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <>
      <div className="products">
        {products.length !== 0 ? (
          products.map((e) => {
            return <ProductCard product={e} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
