import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <Link className="add-to-cart" to="/checkout">
        <span className="cart-count">{props.data.numberCart}</span>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt="ds"
        />
      </Link>
    </div>
  );
}

export default Header;
