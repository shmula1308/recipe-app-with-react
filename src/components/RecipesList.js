import classes from "./RecipesList.module.css";
import RecipeItem from "./RecipeItem";

const RecipesList = (props) => {
  return (
    <ul className={classes.list}>
      {props.recipes.map((recipe) => {
        return (
          <RecipeItem
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            duration={recipe.duration}
            id={recipe.id}
          />
        );
      })}
    </ul>
  );
};

export default RecipesList;
