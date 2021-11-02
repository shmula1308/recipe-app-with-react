import RecipeIngredientList from "./RecipeIngredientList";
import ServingsAndAmountWidget from "./ServingsAndAmountWidget";
import classes from "./RecipeIngredientsSection.module.css";

const RecipeIngredientsSection = (props) => {
  return (
    <div className={classes.ingredients}>
      <h2 className={classes.title}>Ingredients</h2>
      <ServingsAndAmountWidget />
      <RecipeIngredientList ingredients={props.ingredients} />
    </div>
  );
};

export default RecipeIngredientsSection;
