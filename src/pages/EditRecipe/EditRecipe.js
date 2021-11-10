import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DUMMY_INGREDIENTS } from "../../data/Dummy_data";
import RecipeIngredientList from "../RecipeDetails/RecipeIngredients/RecipeIngredientList";
import LeftArrowIconButton from "../../components/UI/LeftArrowIconButton";
import TrashIconButton from "../../components/UI/TrashIconButton";
import Button from "../../components/UI/Button";
import Input from "./Input";

import classes from "./EditRecipe.module.css";

const EditRecipe = (props) => {
  const [transparent, setTransparent] = useState(false);
  const [reorder, setReorder] = useState(false);
  const params = useParams();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 64) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    });
  }, []);

  const ingredientReorderHandler = () => {
    setReorder((prevState) => !prevState);
  };

  return (
    <div className={classes.editRecipePage}>
      <div className={`${classes["top-nav"]} ${transparent ? classes.sticky : ""}`}>
        <Link to={`/recipes/${params.recipeId}`} className={classes.link}>
          <LeftArrowIconButton />
        </Link>
        <h1 className={classes.title}>Edit Recipe</h1>
        <Button className={classes["btn-primary"]}>Save</Button>
      </div>
      <div className={classes.recipe}>
        <form noValidate>
          <Input name='title' label='Title' placeholder='Give your recipe a name' />
          <div className={classes["image-container"]}>
            <img src='#' alt='describe image' className={classes["recipe-image"]} />
            <Button className={classes["btn-secondary"]}>Change image</Button>
            <TrashIconButton className={classes["trash-btn"]} />
          </div>
          <div className={classes.control}>
            <label className={classes.label}>Description</label>
            <textarea placeholder='Introduce your recipe, add notes, cooking tips, serving suggestions, etc...' />
          </div>
          <div className={classes["ingredients-header"]}>
            <label className={classes.label}>Ingredients</label>
            <Button className={classes.reorderBtn} onClick={ingredientReorderHandler}>
              {reorder ? "Done" : "Reorder"}
            </Button>
          </div>
          <RecipeIngredientList ingredients={DUMMY_INGREDIENTS} className={classes["single-column-list"]} />
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
