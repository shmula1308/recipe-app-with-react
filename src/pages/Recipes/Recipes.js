import Card from "../../components/UI/Card";
import SlidersIcon from "../../svg/SlidersIcon";
import RecipesList from "../../components/RecipesList";

import classes from "./Recipes.module.css";

const Recipes = () => {
  return (
    <div className={classes.container}>
      <Card>
        <h1 className={classes.title}>Recipes</h1>
        <div className={classes.controls}>
          <input type='text' placeholder='Search recipes' />
          <button type='button'>
            <SlidersIcon />
          </button>
        </div>
        <RecipesList />
      </Card>
    </div>
  );
};

export default Recipes;
