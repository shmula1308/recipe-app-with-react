import { Fragment } from "react";
import EditableRecipeIngredient from "./EditableRecipeIngredient";
import classes from "./EditableIngredientsList.module.css";
import { useState } from "react/cjs/react.development";

let DUMMY_INGREDIENTS = [
  {
    id: "i1",
    name: "Cherry Tomatoes",
    amount: "500g",
    notes: "",
    isEditing: false,
  },
  {
    id: "i2",
    name: "Cinnamon",
    amount: "2T",
    notes: "Ceylon Type",
    isEditing: false,
  },
  {
    id: "i3",
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    isEditing: false,
  },
  {
    id: "i4",
    name: "Instant Coffee",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    isEditing: false,
  },
  {
    id: "i5",
    name: "Dark Chocolate",
    amount: "100g",
    notes: "Lindt brand preferably",
    isEditing: false,
  },
  {
    id: "i6",
    name: "Rosemary, fresh",
    amount: "1t",
    notes: "",
    isEditing: false,
  },
  {
    id: "i7",
    name: "Red Wine, Merlot",
    amount: "15ml",
    notes: "",
    isEditing: false,
  },
  {
    id: "i8",
    name: "Green Tea",
    amount: "2T",
    notes: "",
    isEditing: false,
  },
  {
    id: "i9",
    name: "Cherry Tomatoes",
    amount: "500g",
    notes: "",
    isEditing: false,
  },
  {
    id: "i10",
    name: "Cinnamon",
    amount: "2T",
    notes: "Ceylon Type",
    isEditing: false,
  },
  {
    id: "i11",
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    isEditing: false,
  },
  {
    id: "i12",
    name: "Instant Coffe",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    isEditing: false,
  },
  {
    id: "i134",
    name: "Dark Chocolate",
    amount: "100g",
    notes: "Lindt brand preferably",
    isEditing: false,
  },
  {
    id: "i14",
    name: "Rosemary, fresh",
    amount: "1t",
    notes: "",
    isEditing: false,
  },
  {
    id: "i15",
    name: "Red Wine, Merlot",
    amount: "15ml",
    notes: "",
    isEditing: false,
  },
  {
    id: "i16",
    name: "Green Tea",
    amount: "2T",
    notes: "",
    isEditing: false,
  },
  {
    id: "i17",
    name: "Cherry Tomatoes",
    amount: "500g",
    notes: "",
    isEditing: false,
  },
  {
    id: "i18",
    name: "Cinnamon",
    amount: "2T",
    notes: "Ceylon Type",
    isEditing: false,
  },
  {
    id: "i19",
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    isEditing: false,
  },
  {
    id: "i20",
    name: "Instant Coffe",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    isEditing: false,
  },
  {
    id: "i21",
    name: "Dark Chocolate",
    amount: "100g",
    notes: "Lindt brand preferably",
    isEditing: false,
  },
  {
    id: "i22",
    name: "Rosemary, fresh",
    amount: "1t",
    notes: "",
    isEditing: false,
  },
  {
    id: "i23",
    name: "Instant Coffe",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    isEditing: false,
  },
];

const EditableIngredientsList = (props) => {
  const [ingredients, setIngredients] = useState(DUMMY_INGREDIENTS);

  const editIngredientHandler = (id) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, isEditing: true } : { ...ingredient, isEditing: false }
      );
    });
  };

  const removeEditInputHandler = () => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => ({ ...ingredient, isEditing: false }));
    });
  };

  return (
    <Fragment>
      <span className={classes["edit-instructions"]}>Tap to edit, swipe to delete</span>
      <ul className={classes.list}>
        {ingredients.map((ingredient) => {
          return (
            <EditableRecipeIngredient
              key={ingredient.id}
              amount={ingredient.amount}
              name={ingredient.name}
              notes={ingredient.notes}
              onRemoveEdit={removeEditInputHandler}
              onEdit={editIngredientHandler}
              isEditing={ingredient.isEditing}
              id={ingredient.id}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default EditableIngredientsList;
