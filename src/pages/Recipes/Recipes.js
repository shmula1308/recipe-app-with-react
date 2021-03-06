import Card from "../../components/UI/Card";
import SlidersIcon from "../../svg/SlidersIcon";
import RecipesList from "../../components/RecipesList";

import classes from "./Recipes.module.css";

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

const Recipes = () => {
  return (
    <Card className={classes.container}>
      <h1 className={classes.title}>Recipes</h1>
      <div className={classes.controls}>
        <input type='text' placeholder='Search recipes' />
        <button type='button'>
          <SlidersIcon />
        </button>
      </div>
      <RecipesList recipes={DUMMY_RECIPES} />
    </Card>
  );
};

export default Recipes;
