import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CenteredWrapper from "./components/common/UI/CenteredWrapper";
import Cart from "./components/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log("show Cart");
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    console.log("hide cart");
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <CenteredWrapper>
        <h1 className="serif">Menu</h1>
        <Menu />
      </CenteredWrapper>
    </>
  );
}

export default App;
