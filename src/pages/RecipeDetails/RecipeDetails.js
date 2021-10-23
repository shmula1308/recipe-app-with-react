import { useParams } from "react-router-dom";
import { DUMMY_RECIPES, DUMMY_INGREDIENTS } from "../../data/Dummy_data";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import RecipeIngredientList from "./RecipeIngredients/RecipeIngredientList";
import RecipeProcedure from "./RecipeProcedure/RecipeProcedure";
import EditRecipe from "../EditRecipe/EditRecipe";
import classes from "./RecipeDetails.module.css";

const RecipeDetails = (props) => {
  const params = useParams();

  const recipe = DUMMY_RECIPES.find((recipe) => recipe.id === params.recipeId);

  return (
    <div className={classes.recipeDetails}>
      <RecipeHeader recipe={recipe} />
      <RecipeIngredientList ingredients={DUMMY_INGREDIENTS} />
      <RecipeProcedure procedure={recipe.procedure} />
    </div>
  );
};

export default RecipeDetails;
