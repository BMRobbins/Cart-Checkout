import classes from "./MenuItem.module.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const MenuItem = (props) => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  const increaseNumberOfItems = () => {
    setNumberOfItems((prevState) => prevState + 1);
  };

  const decreaseNumberOfItems = () => {
    if (numberOfItems > 0) {
      setNumberOfItems((prevState) => prevState - 1);
    }
  };

  return (
    <div className={classes.menu_item_container}>
      <div className={classes.details_container}>
        <div className={classes.name_cal_container}>
          <h3 className={`serif ${classes.name}`}>{props.name}</h3>
          <p className={`san-serif ${classes.calories}`}>
            ({props.calories} Cal)
          </p>
        </div>
        <p className={`san-serif ${classes.description}`}>
          {props.description}
        </p>
        <p className={`san-serif ${classes.price}`}>${props.price}</p>
      </div>
      <div className={classes.item_action_container}>
        <FaMinusCircle
          className={classes.icons}
          onClick={decreaseNumberOfItems}
        />
        <p className={classes.item_number}>{numberOfItems}</p>
        <FaPlusCircle
          className={classes.icons}
          onClick={increaseNumberOfItems}
        />
      </div>
    </div>
  );
};

export default MenuItem;
