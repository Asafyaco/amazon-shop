import React, { useEffect, useState } from "react";
import "./products-grid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({ products }) => {
  const [productsArr, setProductsArr] = useState([]);
  useEffect(() => {
    if (products.length !== 0) {
      setProductsArr(products);
    }
  }, []);
  return (
    <>
      <div className="products">
        {productsArr.length !== 0 ? (
          productsArr.map((e) => {
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
