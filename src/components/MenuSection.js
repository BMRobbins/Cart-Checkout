import Card from "./common/UI/Card";
import classes from "./MenuSection.module.css";
import MenuItem from "./MenuItem";

const MenuSection = (props) => {
  return (
    <Card>
      <div className={classes.header_container}>
        <h2 className={`serif ${classes.header_title}`}>{props.title}</h2>
      </div>
      <div className={classes.menu_items_container}>
        {props.menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            calories={item.calories}
          ></MenuItem>
        ))}
      </div>
    </Card>
  );
};

export default MenuSection;
