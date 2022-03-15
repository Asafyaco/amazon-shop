import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo-div">
        <a href="/">
          {" "}
          <img src={Logo} className="logo-img" alt="logo img" />
        </a>
      </div>
      <div className="search-bar-div">
        <input type="text" className="search-input" />
        <input type="submit" className="submit-button" value="Search" />
      </div>
      <div className="cart-div">
        <button className="cart-btn">Cart</button>
      </div>
    </header>
  );
};

export default Header;
