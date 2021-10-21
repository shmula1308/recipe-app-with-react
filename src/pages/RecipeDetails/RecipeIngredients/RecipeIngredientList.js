import RecipeIngredient from "./RecipeIngredient";
import ServingsAndAmountWidget from "./ServingsAndAmountWidget";
import classes from "./RecipeIngredientList.module.css";

const RecipeIngredientList = (props) => {
  return (
    <div className={classes.ingredients}>
      <h2 className={classes.title}>Ingredients</h2>
      <ServingsAndAmountWidget />
      <ul className={classes.list}>
        {props.ingredients.map((ingredient, i) => {
          return (
            <RecipeIngredient
              key={i}
              amount={ingredient.amount}
              name={ingredient.name}
              notes={ingredient.notes}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeIngredientList;
