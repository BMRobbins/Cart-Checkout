import React from "react";
import classes from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Header = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showBannerHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.name_container}>
        <h1 className={`serif ${classes.name}`}>Burger Shop</h1>
      </div>
      <div className={classes.cart_container}>
        <FaShoppingCart
          className={classes.cart_icon}
          onClick={showBannerHandler}
        />
        <div className={classes.cart_number_container}>
          <p className={classes.cart_number}>{cartQuantity}</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
