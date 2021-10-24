import { Link } from "react-router-dom";
import LeftArrowIconButton from "../../../components/UI/LeftArrowIconButton";
import EditIconButton from "../../../components/UI/EditIconButton";
import TrashIconIconButton from "../../../components/UI/TrashIconButton";

import classes from "./RecipeNavMobile.module.css";

const RecipeNavMobile = (props) => {
  return (
    <nav className={classes["nav-mobile"]}>
      <div className={classes.actions}>
        <LeftArrowIconButton />
        <div className={classes["recipe-actions"]}>
          <Link style={{ color: "inherit" }} to={`/recipes/${props.recipeId}/edit`}>
            <EditIconButton />
          </Link>
          <TrashIconIconButton />
        </div>
      </div>
      <h1 className={classes.title}>Instant Pot Mongolian Chicken</h1>
    </nav>
  );
};

export default RecipeNavMobile;
