import EditIcon from "../../../svg/EditIcon";
import TrashIcon from "../../../svg/TrashIcon";

import classes from "./RecipeNavDesktop.module.css";

const RecipeNavDesktop = (props) => {
  return (
    <nav className={classes["nav-desktop"]}>
      <h1 className={classes.title}>Instant Pot Mongolian Chicken</h1>
      <div className={classes["recipe-actions"]}>
        <button type='button' className={classes.btn}>
          <EditIcon className={classes.icon} />
        </button>
        <button type='button' className={classes.btn}>
          <TrashIcon className={classes.icon} />
        </button>
      </div>
    </nav>
  );
};

export default RecipeNavDesktop;
