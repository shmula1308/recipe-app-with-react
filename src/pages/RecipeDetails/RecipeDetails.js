import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/UI/Card";
import RecipeHeaderMobile from "./RecipeHeaderMobile/RecipeHeaderMobile";
import RecipeHeaderDesktop from "../RecipeDetails/RecipeHeaderDesktop/RecipeHeaderDesktop";
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
  const [windowWidth, setWindowWidth] = useState(0);
  const params = useParams();

  const updateWindowWidth = () => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
  };

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
  }, []);

  const recipe = DUMMY_RECIPES.find((recipe) => recipe.id === params.recipeId);

  const responsive = {
    showHeaderDesktop: windowWidth >= 768,
    showHeaderMobile: windowWidth <= 767,
  };

  return (
    <div className={classes.recipeDetails}>
      <RecipeHeaderMobile showHeaderMobile={responsive.showHeaderMobile} recipe={recipe} />
      <RecipeHeaderDesktop showHeaderDesktop={responsive.showHeaderDesktop} recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
