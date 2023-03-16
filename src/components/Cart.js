import classes from "./Cart.module.css";
import Modal from "./common/UI/Modal";

const CartModalContent = (props) => {
  return (
    <>
      <h1>Cart Checkout</h1>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
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
