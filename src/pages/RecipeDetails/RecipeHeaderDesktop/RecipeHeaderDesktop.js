import RecipeNavDesktop from "./RecipeNavDesktop";
import RecipeDescription from "../RecipeDescription";
import classes from "./RecipeHeaderDesktop.module.css";

const RecipeHeaderDesktop = (props) => {
  return (
    <header
      className={classes.header}
      style={{
        display: props.showHeaderDesktop ? "flex" : "none",
      }}>
      <div className={classes["image-container"]}>
        <img src={props.recipe.image.url} alt={props.recipe.image.alt} className={classes["recipe-image"]} />
      </div>
      <div className={classes.description}>
        <div className={classes.nav}>
          <h1 className={classes.title}>Instant Pot Mongolian Chicken</h1>
          <RecipeNavDesktop />
        </div>
        <RecipeDescription />
      </div>
    </header>
  );
};

export default RecipeHeaderDesktop;
