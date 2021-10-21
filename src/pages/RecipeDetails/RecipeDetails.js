import { useParams } from "react-router-dom";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import RecipeIngredientList from "./RecipeIngredients/RecipeIngredientList";
import classes from "./RecipeDetails.module.css";

const DUMMY_RECIPES = [
  {
    id: "r1",
    title: "Recipe 1",
    image: { url: "/images/recipe1.jpg", alt: "recipe 1" },
    duration: "30 min",
  },
  {
    id: "r2",
    title: "Recipe 2",
    image: { url: "/images/recipe2.jpg", alt: "recipe 2" },
    duration: "17min",
  },
  {
    id: "r3",
    title: "Recipe 3",
    image: { url: "/images/recipe3.jpg", alt: "recipe 3" },
    duration: "1hr 35min",
  },
  {
    id: "r4",
    title: "Recipe 4",
    image: { url: "/images/recipe4.jpg", alt: "recipe 4" },
    duration: "30 min",
  },
  {
    id: "r5",
    title: "Recipe 5",
    image: { url: "/images/recipe5.jpg", alt: "recipe 5" },
    duration: "15 min",
  },
  {
    id: "r6",
    title: "Recipe 6",
    image: { url: "/images/recipe6.jpg", alt: "recipe 6" },
    duration: "10 min",
  },
  {
    id: "r7",
    title: "Recipe 7",
    image: { url: "/images/recipe7.jpg", alt: "recipe 7" },
    duration: "15 min",
  },
];

let DUMMY_INGREDIENTS = [
  {
    name: "Cherry Tomatoes",
    amount: "500g",
    notes: "",
    imageURL: "",
  },
  {
    name: "Cinnamon",
    amount: "2T",
    notes: "Ceylon Type",
    imageURL: "",
  },
  {
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Instant Coffee",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    imageURL: "",
  },
  {
    name: "Dark Chocolate",
    amount: "100g",
    notes: "Lindt brand preferably",
    imageURL: "",
  },
  {
    name: "Rosemary, fresh",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Red Wine, Merlot",
    amount: "15ml",
    notes: "",
    imageURL: "",
  },
  {
    name: "Green Tea",
    amount: "2T",
    notes: "",
    imageURL: "",
  },
  {
    name: "Cherry Tomatoes",
    amount: "500g",
    notes: "",
    imageURL: "",
  },
  {
    name: "Cinnamon",
    amount: "2T",
    notes: "Ceylon Type",
    imageURL: "",
  },
  {
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Instant Coffe",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    imageURL: "",
  },
  {
    name: "Dark Chocolate",
    amount: "100g",
    notes: "Lindt brand preferably",
    imageURL: "",
  },
  {
    name: "Rosemary, fresh",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Red Wine, Merlot",
    amount: "15ml",
    notes: "",
    imageURL: "",
  },
  {
    name: "Green Tea",
    amount: "2T",
    notes: "",
    imageURL: "",
  },
  {
    name: "Cherry Tomatoes",
    amount: "500g",
    notes: "",
    imageURL: "",
  },
  {
    name: "Cinnamon",
    amount: "2T",
    notes: "Ceylon Type",
    imageURL: "",
  },
  {
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Instant Coffe",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    imageURL: "",
  },
  {
    name: "Dark Chocolate",
    amount: "100g",
    notes: "Lindt brand preferably",
    imageURL: "",
  },
  {
    name: "Rosemary, fresh",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Fenugreek",
    amount: "1t",
    notes: "",
    imageURL: "",
  },
  {
    name: "Instant Coffe",
    amount: "1/2t",
    notes: "Nes Caffe Brand",
    imageURL: "",
  },
];

const RecipeDetails = (props) => {
  const params = useParams();
  const recipe = DUMMY_RECIPES.find((recipe) => recipe.id === params.recipeId);

  return (
    <div className={classes.recipeDetails}>
      <RecipeHeader recipe={recipe} />
      <RecipeIngredientList ingredients={DUMMY_INGREDIENTS} />
    </div>
  );
};

export default RecipeDetails;
