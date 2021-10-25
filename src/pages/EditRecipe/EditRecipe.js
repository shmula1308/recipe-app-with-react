import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LeftArrowIconButton from "../../components/UI/LeftArrowIconButton";
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
        <Button className={classes.btn}>Save</Button>
      </div>
      <div className={classes.recipe}></div>
    </div>
  );
};

export default EditRecipe;
