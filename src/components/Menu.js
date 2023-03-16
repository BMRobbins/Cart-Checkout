import MenuItems from "../logic/MenuItems";
import MenuSection from "./MenuSection";
import classes from "./Menu.module.css";

const Menu = () => {
  const Burgers = MenuItems.catagories.Burgers;
  const Fries = MenuItems.catagories.Fries;
  const Drinks = MenuItems.catagories.Drinks;
  return (
    <div className={classes.menu_container}>
      <MenuSection title="Burgers" menuItems={Burgers} />
      <MenuSection title="Fries" menuItems={Fries} />
      <MenuSection title="Drinks" menuItems={Drinks} />
    </div>
  );
};

export default Menu;
