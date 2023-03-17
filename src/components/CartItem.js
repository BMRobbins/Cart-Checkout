import React from "react";
import classes from "./CartItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const { id, price, name } = props;

  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  const removeToCartHandler = (item) => {
    dispatch(
      cartActions.removeItemFromCart({
        id,
        name,
        price,
      })
    );
  };

  const itemQuantity = useSelector((state) => {
    const item = state.cart.items.find((item) => item.id === id);
    return item !== undefined ? item.quantity : 0;
  });

  return (
    <div className={classes.item_container}>
      <p className={`san-serif ${classes.item_name}`}>{name}</p>
      <p className={`san-serif ${classes.item_quantity_price}`}>${price}</p>
      <div className={classes.item_action_container}>
        <FaMinusCircle
          className={classes.icons}
          onClick={removeToCartHandler}
        />
        <p className={classes.item_number}>{itemQuantity}</p>
        <FaPlusCircle className={classes.icons} onClick={addToCartHandler} />
      </div>
    </div>
  );
};

export default CartItem;
