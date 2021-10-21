import PlusIcon from "../../../svg/PlusIcon";
import MinusIcon from "../../../svg/MinusIcon";
import classes from "./ServingsAndAmountWidget.module.css";

const ServingsAndAmountWidget = (props) => {
  return (
    <div className={classes.widget}>
      <div className={classes["servings-controls"]}>
        <button type='button' className={`${classes.btn} ${classes["btn--primary"]}`}>
          <MinusIcon className={classes.icon} />
        </button>
        <span className={classes.amount}>4 servings</span>
        <button type='button' className={`${classes.btn} ${classes["btn--primary"]}`}>
          <PlusIcon className={classes.icon} />
        </button>
      </div>
      <div className={classes["units-control"]}>
        <button type='button' className={`${classes.btn} ${classes["btn--secondary"]}`}>
          Convert Units
        </button>
      </div>
    </div>
  );
};

export default ServingsAndAmountWidget;
