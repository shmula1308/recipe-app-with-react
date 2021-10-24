import LeftArrowIconButton from "../../components/UI/LeftArrowIconButton";
import Button from "../../components/UI/Button";
import classes from "./EditRecipe.module.css";

const EditRecipe = (props) => {
  return (
    <div className={classes.editRecipePage}>
      <div className={classes["top-nav"]}>
        <LeftArrowIconButton />
        <h1 className={classes.title}>Edit Recipe</h1>
        <Button className={classes.btn}>Save</Button>
      </div>
    </div>
  );
};

export default EditRecipe;
