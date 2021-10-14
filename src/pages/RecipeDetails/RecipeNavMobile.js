import LeftArrowIcon from "../../svg/LeftArrowIcon";

import classes from "./RecipeNavMobile.module.css";

const RecipeNavMobile = (props) => {
  return (
    <nav className={classes["nav-mobile"]}>
      <div className={classes.controls}>
        <button type='button' className={classes.btn}>
          <LeftArrowIcon className={classes.leftArrowIcon} />
        </button>
        <h1 className={classes.title}>Instant Pot Mongolian Beef</h1>
      </div>
    </nav>
  );
};

export default RecipeNavMobile;
