import { useEffect } from "react";
import { useState } from "react";
import { getRandomColor } from "../../../utils/generateRandomColor";
import classes from "./ReordableRecipeIngredients.module.css";

const ReordableRecipeIngredient = (props) => {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    let color = getRandomColor();
    setRandomColor(color);
  }, []);

  return (
    <li className={classes.ingredient}>
      <div className={classes.image} style={{ backgroundColor: randomColor, opacity: 0.4 }}>
        <img src='' alt={props.alt} />
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

export default ReordableRecipeIngredient;
