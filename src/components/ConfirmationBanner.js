import classes from "./ConfirmationBanner.module.css";
import { useDispatch } from "react-redux";
import { bannerActions } from "../store/banner_slice";

const ConfirmationBanner = () => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(bannerActions.hideBanner());
  }, 10000);
  return (
    <div className={classes.confirmation_banner}>
      <p className={`serif ${classes.banner_message}`}>
        You have successfully placed your order!
      </p>
    </div>
  );
};

export default ConfirmationBanner;
