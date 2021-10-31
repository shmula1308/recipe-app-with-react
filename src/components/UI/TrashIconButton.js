import TrashIcon from "../../svg/TrashIcon";
import classes from "./TrashIconButton.module.css";

const TrashIconIconButton = (props) => {
  const styles = `${classes.btn} ${props.className || ""}`;
  return (
    <button type='button' className={styles}>
      <TrashIcon className={classes.icon} />
    </button>
  );
};

export default TrashIconIconButton;
