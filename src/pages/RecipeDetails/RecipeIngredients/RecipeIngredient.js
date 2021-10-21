import classes from "./RecipeIngredient.module.css";

const RecipeIngredient = (props) => {
  return (
    <li className={classes.ingredient}>
      <div className={classes.image}>
        <img src={props.imageURL} alt={props.alt} />
      </div>
      <div className={classes.content}>
        <p className={classes.name}>
          <span className={classes.amount}>{props.amount}</span>
          {props.name}
        </p>
        <span className={classes["additional-notes"]}>{props.notes}</span>
      </div>
    </li>
  );
};

export default RecipeIngredient;
