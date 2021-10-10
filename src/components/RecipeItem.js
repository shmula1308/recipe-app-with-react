import DotsCircleIcon from "../svg/DotsCircleIcon";
import classes from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  return (
    <li className={classes.recipe}>
      <img src='/images/salad.jpg' alt='salad' />
      <button className={classes.button}>
        <DotsCircleIcon />
      </button>
      <span className={classes.duration}>30min</span>
    </li>
  );
};

export default RecipeItem;
