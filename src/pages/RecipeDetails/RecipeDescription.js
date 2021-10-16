import { useState } from "react";
import { Fragment } from "react";
import RecipeDuration from "./RecipeDuration";
import classes from "./RecipeDescription.module.css";

const RecipeDescription = (props) => {
  const [isSeeMore, setIsSeeMore] = useState(true);

  const descriptionText =
    "Instant Pot Taco Soup is one of the easiest soups to make. This is a variation on an old family favorite. I adapted this to be a pressure cooker taco soup. It's delicious and zesty!";

  const seeMoreHandler = () => {
    setIsSeeMore((prevState) => !prevState);
  };

  return (
    <Fragment>
      <p className={classes["recipe-description"]}>
        {isSeeMore ? descriptionText.slice(0, 150).trim() + "..." : descriptionText}
        <span className={classes.readMore} onClick={seeMoreHandler}>
          {isSeeMore ? "See more" : "   See less"}
        </span>
      </p>
      <RecipeDuration />
    </Fragment>
  );
};

export default RecipeDescription;
