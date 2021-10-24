import LeftArrowIcon from "../../svg/LeftArrowIcon";
import classes from "./LeftArrowIconButton.module.css";

const LeftArrowIconButton = (props) => {
  return (
    <button type='button' className={classes.btn}>
      <LeftArrowIcon className={classes.icon} />
    </button>
  );
};

export default LeftArrowIconButton;
