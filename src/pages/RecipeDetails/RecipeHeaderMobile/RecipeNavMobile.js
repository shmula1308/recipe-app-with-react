import LeftArrowIcon from "../../../svg/LeftArrowIcon";
import EditIcon from "../../../svg/EditIcon";
import TrashIcon from "../../../svg/TrashIcon";

import classes from "./RecipeNavMobile.module.css";

const RecipeNavMobile = (props) => {
  return (
    <nav className={classes["nav-mobile"]}>
      <div className={classes.actions}>
        <button type='button' className={classes.btn}>
          <LeftArrowIcon className={classes.icon} />
        </button>
        <div className={classes["recipe-actions"]}>
          <button type='button' className={classes.btn}>
            <EditIcon className={classes.icon} />
          </button>
          <button type='button' className={classes.btn}>
            <TrashIcon className={classes.icon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default RecipeNavMobile;
