import classes from "./Cart.module.css";
import Modal from "./common/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { cartActions } from "../store/cart-slice";
import { bannerActions } from "../store/banner_slice";

const CartModalContent = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  let cartTotal = 0;
  cartItems.map((item) => (cartTotal = cartTotal + item.totalPrice));

  const cartEmpty = cartTotal < 1;

  const dispatch = useDispatch();
  const processOrderCompletion = () => {
    dispatch(cartActions.resetCart());
    dispatch(cartActions.hideCart());
    dispatch(bannerActions.showBanner());
  };

  const closeCartHandler = () => {
    dispatch(cartActions.hideCart());
  };

  return (
    <>
      <h1>Cart Checkout</h1>
      {cartEmpty && (
        <div className={classes.cart_empty_container}>
          <h2 className={classes.cart_empty_text}>Your Cart is Empty</h2>
        </div>
      )}
      <div className={classes.cart_items}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
      <div className={classes.total_container}>
        <p className={`serif ${classes.total}`}>Total:</p>
        <p className={`san-serif ${classes.total_amount}`}>
          ${cartTotal.toFixed(2)}
        </p>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={closeCartHandler}>
          Cancel
        </button>
        {!cartEmpty && (
          <button onClick={processOrderCompletion} className={classes.submit}>
            Confirm
          </button>
        )}
      </div>
    </>
  );
};

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <CartModalContent onClose={props.onClose} />
    </Modal>
  );
};

export default Cart;
