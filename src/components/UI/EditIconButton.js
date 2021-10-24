import EditIcon from "../../svg/EditIcon";

import classes from "./EditIconButton.module.css";

const EditIconButton = (props) => {
  return (
    <button type='button' className={classes.btn}>
      <EditIcon className={classes.icon} />
    </button>
  );
};

export default EditIconButton;
