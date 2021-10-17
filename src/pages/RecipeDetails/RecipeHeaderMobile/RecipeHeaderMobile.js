import RecipeNavMobile from "./RecipeNavMobile";
import RecipeDescription from "../RecipeDescription";
import classes from "./RecipeHeaderMobile.module.css";

const RecipeHeaderMobile = (props) => {
  return (
    <header
      className={classes.header}
      style={{
        display: props.showHeaderMobile ? "block" : "none",
      }}>
      <RecipeNavMobile />
      <div className={classes["recipe-header"]}>
        <h1 className={classes.title}>Instant Pot Mongolian Chicken</h1>
        <div className={classes["image-container"]}>
          <img
            src={props.recipe.image.url}
            alt={props.recipe.image.alt}
            className={classes["recipe-image"]}
          />
        </div>
        <RecipeDescription />
      </div>
    </header>
  );
};

export default RecipeHeaderMobile;
