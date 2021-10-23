import { useState } from "react";
import ClockIcon from "../../../svg/ClockIcon";
import RecipeNavMobile from "./RecipeNavMobile";
import RecipeNavDesktop from "./RecipeNavDesktop";

import classes from "./RecipeHeader.module.css";

const RecipeHeader = (props) => {
  const [isSeeMore, setIsSeeMore] = useState(true);

  const descriptionText =
    "Instant Pot Taco Soup is one of the easiest soups to make. This is a variation on an old family favorite. I adapted this to be a pressure cooker taco soup. It's delicious and zesty!";

  const seeMoreHandler = () => {
    setIsSeeMore((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <div className={classes["recipe-header-container"]}>
        <RecipeNavMobile recipeId={props.recipe.id} />
        <div className={classes["recipe-header"]}>
          <div className={classes["image-container"]}>
            <img
              src={props.recipe.image.url}
              alt={props.recipe.image.alt}
              className={classes["recipe-image"]}
            />
          </div>
          <div className={classes["recipe-summary"]}>
            <RecipeNavDesktop recipeId={props.recipe.id} />
            <p className={classes["recipe-description"]}>
              {isSeeMore ? descriptionText.slice(0, 150).trim() + "..." : descriptionText}
              <span className={classes.readMore} onClick={seeMoreHandler}>
                {isSeeMore ? "See more" : "   See less"}
              </span>
            </p>
            <div className={classes.duration}>
              <span className={classes["prep-time"]}>
                <ClockIcon className={classes.icon} />
                Prep: <span className={classes.time}>10min</span>
              </span>
              <span className={classes["cook-time"]}>
                Cook:<span className={classes.time}>20min</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RecipeHeader;
