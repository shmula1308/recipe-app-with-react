import { Link, useHistory } from "react-router-dom";
import EditIconButton from "../../../components/UI/EditIconButton";
import TrashIconButton from "../../../components/UI/TrashIconButton";

import classes from "./RecipeNavDesktop.module.css";

const RecipeNavDesktop = (props) => {
  const history = useHistory();

  return (
    <nav className={classes["nav-desktop"]}>
      <h1 className={classes.title}>Instant Pot Mongolian Chicken</h1>
      <div className={classes["recipe-actions"]}>
        <Link style={{ color: "inherit" }} to={`/recipes/${props.recipeId}/edit`}>
          <EditIconButton />
        </Link>
        <TrashIconButton />
      </div>
    </nav>
  );
};

export default RecipeNavDesktop;
