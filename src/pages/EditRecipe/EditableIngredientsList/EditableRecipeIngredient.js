import { useEffect } from "react";
import { useState } from "react";
import { getRandomColor } from "../../../utils/generateRandomColor";
import TrashIcon from "../../../svg/TrashIcon";
import classes from "./EditableRecipeIngredient.module.css";

const EditableRecipeIngredient = (props) => {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    let color = getRandomColor();
    setRandomColor(color);
  }, []);

  const editIngredientHandler = () => {
    props.onEdit(props.id);
  };

  const removeEditInputHandler = () => {
    props.onRemoveEdit();
  };

  if (props.isEditing) {
    return (
      <li className={classes.action}>
        <input type='text' value={props.name} />
        <button className={classes.trashBtn} type='button'>
          <TrashIcon className={classes.trashIcon} />
        </button>
      </li>
    );
  }

  return (
    <li className={classes.ingredient} onMouseDown={removeEditInputHandler} onMouseUp={editIngredientHandler}>
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

export default EditableRecipeIngredient;
