import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CenteredWrapper from "./components/common/UI/CenteredWrapper";
import Cart from "./components/Cart";
import ConfirmationBanner from "./components/ConfirmationBanner";
import { useSelector } from "react-redux";

function App() {
  const shouldShowBanner = useSelector(
    (state) => state.banner.shouldShowBanner
  );

  const shouldShowCart = useSelector((state) => state.cart.cartIsShown);

  return (
    <>
      {shouldShowCart && <Cart />}
      <Header />
      {shouldShowBanner && <ConfirmationBanner />}
      <CenteredWrapper>
        <h1 className="serif">Menu</h1>
        <Menu />
      </CenteredWrapper>
    </>
  );
}

export default App;
