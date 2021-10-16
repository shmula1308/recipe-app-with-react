import ClockIcon from "../../svg/ClockIcon";
import classes from "./RecipeDuration.module.css";

const RecipeDuration = () => {
  return (
    <div className={classes.duration}>
      <span className={classes["prep-time"]}>
        <ClockIcon className={classes.icon} />
        Prep: <span className={classes.time}>10min</span>
      </span>
      <span className={classes["cook-time"]}>
        Cook:<span className={classes.time}>20min</span>
      </span>
    </div>
  );
};

export default RecipeDuration;
