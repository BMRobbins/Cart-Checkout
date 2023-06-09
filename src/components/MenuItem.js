import { useDispatch, useSelector } from "react-redux";
import classes from "./MenuItem.module.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { cartActions } from "../store/cart-slice";

const MenuItem = (props) => {
  const { name, calories, price, description, id } = props;

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
    <div className={classes.menu_item_container}>
      <div className={classes.details_container}>
        <div className={classes.name_cal_container}>
          <h3 className={`serif ${classes.name}`}>{props.name}</h3>
          <p className={`san-serif ${classes.calories}`}>({calories} Cal)</p>
        </div>
        <p className={`san-serif ${classes.description}`}>{description}</p>
        <p className={`san-serif ${classes.price}`}>${props.price}</p>
      </div>
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

export default MenuItem;
