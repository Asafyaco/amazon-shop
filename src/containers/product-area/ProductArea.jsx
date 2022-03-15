import React from "react";
import "./product-area.css";
import SideBar from "../../components/side-bar/SideBar";
import ProductsGrid from "../../components/product-grid/ProductsGrid";
const ProductArea = ({ products, addProduct }) => {
  return (
    <div className="ContentContainer">
      <SideBar addProduct={addProduct} />
      <ProductsGrid products={products} />
    </div>
  );
};

export default ProductArea;
