import "./App.css";
import Header from "./containers/header/Header";
import ProductArea from "./containers/product-area/ProductArea";
import Footer from "./containers/footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((json) => {
        console.log(json);
        setProducts(json);
      });
    });
  }, []);

  const addProduct = (product) => {
    let x = products;
    x.push(product);
    setProducts(x);
    console.log(products);
  };

  return (
    <>
      <Header />
      <ProductArea products={products} addProduct={addProduct} /> <Footer />
    </>
  );
};

export default App;
