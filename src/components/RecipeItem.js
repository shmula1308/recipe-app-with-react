import { useHistory } from "react-router-dom";
import DotsCircleIcon from "../svg/DotsCircleIcon";
import classes from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  const history = useHistory();

  const changeRouteHandler = () => {
    history.push(`/recipes/${props.id}`);
  };
  return (
    <li className={classes["recipe-item"]} onClick={changeRouteHandler}>
      <div className={classes["recipe-thumbnail"]}>
        <img src={props.image.url} alt={props.image.alt} />
        <button className={classes.button}>
          <DotsCircleIcon className={classes.icon} />
        </button>
        <span className={classes.duration}>{props.duration}</span>
      </div>
      <p className={classes["recipe-title"]}>{props.title}</p>
    </li>
  );
};

export default RecipeItem;
