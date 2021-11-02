import RecipeIngredient from "./RecipeIngredient";
import classes from "./RecipeIngredientList.module.css";

const RecipeIngredientList = (props) => {
  const styles = `${classes.list} ${props.className}`;
  return (
    <ul className={styles}>
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
  );
};

export default RecipeIngredientList;
