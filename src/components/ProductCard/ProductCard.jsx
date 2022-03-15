import React, { Component } from "react";
import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} width={"100px"} alt="Product Image" />
      <br />

      <div className="product-info">
        <h4>{product.title}</h4>
        <br />
        <h5 style={{ fontWeight: "Bold", textAlign: "center" }}>
          $ {product.price}
        </h5>
        <br />
        <p>Category: {product.category}</p>
        <p>Quantity: {product.rating.count}</p>
      </div>
    </div>
  );
};

export default ProductCard;
