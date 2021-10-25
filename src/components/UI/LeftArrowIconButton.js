import LeftArrowIcon from "../../svg/LeftArrowIcon";
import classes from "./LeftArrowIconButton.module.css";

const LeftArrowIconButton = (props) => {
  return (
    <button
      type='button'
      className={`${classes.btn} ${props.className ? props.className : ""}`}
      onClick={props.onClick}>
      <LeftArrowIcon className={classes.icon} />
    </button>
  );
};

export default LeftArrowIconButton;
