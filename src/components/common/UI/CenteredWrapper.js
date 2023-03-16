import classes from "./CenteredWrapper.module.css";

const CenteredWrapper = (props) => {
  return <div className={classes.wrapper_container}>{props.children}</div>;
};

export default CenteredWrapper;
