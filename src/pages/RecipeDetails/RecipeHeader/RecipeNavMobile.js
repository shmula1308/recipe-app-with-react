import { Link } from "react-router-dom";
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
          <Link style={{ color: "inherit" }} to={`/recipes/${props.recipeId}/edit`}>
            <button type='button' className={classes.btn}>
              <EditIcon className={classes.icon} />
            </button>
          </Link>
          <button type='button' className={classes.btn}>
            <TrashIcon className={classes.icon} />
          </button>
        </div>
      </div>
      <h1 className={classes.title}>Instant Pot Mongolian Chicken</h1>
    </nav>
  );
};

export default RecipeNavMobile;
