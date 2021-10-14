import { Fragment } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "../../svg/EditIcon";
import TrashIcon from "../../svg/TrashIcon";
import RecipeNavMobile from "./RecipeNavMobile";
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

const RecipeDetails = (props) => {
  const params = useParams();

  const recipe = DUMMY_RECIPES.find((recipe) => recipe.id === params.recipeId);

  return (
    <Fragment>
      <RecipeNavMobile />
      <div className={classes["recipe-header"]}>
        <div className={classes.actions}>
          <button type='button' className={classes.btn}>
            <EditIcon />
          </button>
          <button type='button' className={classes.btn}>
            <TrashIcon />
          </button>
        </div>
        <div>
          <img src={recipe.image.url} alt={recipe.image.alt} />
          <p className={classes["recipe-description"]}>
            Instant Pot Taco Soup is one of the easiest soups to make. This is a variation on an old family
            favorite. I adapted this to be a pressure cooker taco soup. It's delicious and zesty!
          </p>
          <div>
            <span className={classes["prep-time"]}></span>
            <span className={classes["cook-time"]}></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeDetails;
