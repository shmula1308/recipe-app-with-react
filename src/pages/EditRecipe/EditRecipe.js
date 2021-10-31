import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LeftArrowIconButton from "../../components/UI/LeftArrowIconButton";
import TrashIconButton from "../../components/UI/TrashIconButton";
import Button from "../../components/UI/Button";
import classes from "./EditRecipe.module.css";

const EditRecipe = (props) => {
  const [transparent, setTransparent] = useState(false);
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
          <div className={classes.control}>
            <label>Title</label>
            <input type='text' placeholder='Give your recipe a name' />
          </div>
          <div className={classes["image-container"]}>
            <img src='#' alt='describe image' className={classes["recipe-image"]} />
            <Button className={classes["btn-secondary"]}>Change image</Button>
            <TrashIconButton className={classes["trash-btn"]} />
          </div>
          <div className={classes.control}>
            <label>Description</label>
            <textarea placeholder='Introduce your recipe, add notes, cooking tips, serving suggestions, etc...' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
