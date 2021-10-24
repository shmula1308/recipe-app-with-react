import TrashIcon from "../../svg/TrashIcon";
import classes from "./TrashIconButton.module.css";

const TrashIconIconButton = (props) => {
  return (
    <button type='button' className={classes.btn}>
      <TrashIcon className={classes.icon} />
    </button>
  );
};

export default TrashIconIconButton;
