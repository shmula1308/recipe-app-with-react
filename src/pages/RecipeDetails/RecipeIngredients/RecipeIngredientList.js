import RecipeIngredient from "./RecipeIngredient";
import classes from "./RecipeIngredientList.module.css";

const RecipeIngredientList = (props) => {
  return (
    <div className={classes.ingredients}>
      <div className={classes["servings-widget"]}>
        <button type='button' className={classes.btn}>
          -
        </button>
        <span className={classes.servings}> 4 servings</span>
        <button type='button' className={classes.btn}>
          +
        </button>
      </div>
      <div className={classes["units-widget"]}>
        <button type='button' className={classes.btn}>
          Convert Units
        </button>
      </div>
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
