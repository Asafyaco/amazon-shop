import React, { useState } from "react";
import "./side-bar.css";
const SideBar = ({ addProduct }) => {
  const [color, setColor] = useState("#fff");
  let file, name, quantity, price, category;
  return (
    <div className="sideBar" style={{ backgroundColor: color }}>
      <div className="brands">
        <span className="headline">Brands:</span>
        <br />
        <input type="checkbox" id="nike" />
        <label for="nike"> Nike</label>
        <br />
        <input type="checkbox" id="adidas" />
        <label for="adidas"> Adidas</label>
        <br />
        <input type="checkbox" id="hollister" />
        <label for="hollister"> Hollister</label>
        <br />
        <input type="checkbox" id="CalvinKlein" />
        <label for="CalvinKlein"> Calvin Klein</label>
        <br />
        <input type="checkbox" id="abercombie" />
        <label for="abercombie"> Abercombie & Fitch</label>
        <br />
        <input type="checkbox" id="underArmour" />
        <label for="underArmour"> Under Armour</label>
        <br />
        <input type="checkbox" id="zara" />
        <label for="zara"> Zara</label>
        <br />
        <input type="checkbox" id="bershka" />
        <label for="bershka"> Bershka</label>
      </div>
      <br />
      <hr />
      <div className="color-selected">
        <span className="headline"> Select Background Color: </span>
        <br />
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </div>
      <br />
      <hr />
      <div className="manager">
        <span className="headline"> Add Product </span>
        <br />
        <label for="productImage" className="text-input">
          Product Image:{" "}
        </label>
        <input
          type="file"
          className="text-input"
          id="productImage"
          onChange={(e) => {
            file = e.target.value;
          }}
        />
        <br />
        <label for="productName" className="text-input">
          Name:{" "}
        </label>
        <input
          type="text"
          className="text-input"
          id="productName"
          placeholder="Product Name"
          onChange={(e) => {
            name = e.target.value;
          }}
        />
        <br />
        <label for="productQuantity" className="text-input">
          Quantity:{" "}
        </label>
        <input
          type="number"
          min={1}
          className="text-input"
          id="productQuantity"
          placeholder="Product Quantity"
          onChange={(e) => {
            quantity = e.target.value;
          }}
        />
        <br />
        <label for="productBrand" className="text-input">
          Brand:{" "}
        </label>
        <select name="brands" id="brands">
          <option value="Nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="hollister">Hollister</option>
          <option value="CalvinKlein">Calvin Klein</option>
          <option value="abercombie">Abercombie</option>
          <option value="underArmour">Under Armour</option>
          <option value="zara">Zara</option>
          <option value="bershka">Bershka</option>
        </select>
        <br />
        <label for="productPrice" className="text-input">
          Price:{" "}
        </label>
        <input
          type="number"
          min={0}
          className="text-input"
          id="productPrice"
          placeholder="Product Price"
          onChange={(e) => {
            price = e.target.value;
          }}
        />
        <br />
        <label for="productCategory" className="text-input">
          Category:{" "}
        </label>
        <input
          type="text"
          className="text-input"
          id="productCategory"
          placeholder="product Category"
          onChange={(e) => {
            category = e.target.value;
          }}
        />
        <br />
        <input
          type="submit"
          className="text-input"
          id="addProduct"
          value={"Add Product"}
          onClick={(e) => {
            let submit = {
              file: file,
              name: name,
              quantity: quantity,
              price: price,
              category: category,
            };
            addProduct(submit);
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
