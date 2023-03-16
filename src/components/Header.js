import React from "react";
import classes from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.name_container}>
        <h1 className={`serif ${classes.name}`}>Burger Shop</h1>
      </div>
      <div className={classes.cart_container}>
        <FaShoppingCart
          className={classes.cart_icon}
          onClick={props.onShowCart}
        />
        <div className={classes.cart_number_container}>
          <p className={classes.cart_number}>0</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
