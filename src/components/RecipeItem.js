import DotsCircleIcon from "../svg/DotsCircleIcon";
import classes from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  return (
    <li className={classes["recipe-item"]}>
      <div className={classes["recipe-thumbnail"]}>
        <img src='/images/salad.jpg' alt='salad' />
        <button className={classes.button}>
          <DotsCircleIcon className={classes.icon} />
        </button>
        <span className={classes.duration}>30min</span>
      </div>
      <p className={classes["recipe-title"]}>Best Broccoli Salad Recipe</p>
    </li>
  );
};

export default RecipeItem;
