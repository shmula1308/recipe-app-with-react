import React from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "../../svg/HomeIcon";
import PlannerIcon from "../../svg/PlannerIcon";
import ShoppingListIcon from "../../svg/ShoppingListIcon";
import NewRecipeIcon from "../../svg/NewRecipeIcon";
import SettingsIcon from "../../svg/SettingsIcon";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = (props) => {
  // let navClasses = !props.showMobileNav
  //   ? classes["mobile-nav"]
  //   : `${classes["mobile-nav"]} ${classes.showNav}`;

  return (
    <div className={classes["mobile-nav"]}>
      <NavLink className={classes.link} to='recipes'>
        <HomeIcon />
        <span>Recipes</span>
      </NavLink>
      <NavLink className={classes.link} to='planner'>
        <PlannerIcon />
        <span>Planner</span>
      </NavLink>
      <NavLink className={classes.link} to='shopping-list'>
        <ShoppingListIcon />
        <span>Shopping List</span>
      </NavLink>
      <NavLink className={classes.link} to='new-recipe'>
        <NewRecipeIcon />
        <span>New Recipe</span>
      </NavLink>
      <NavLink className={classes.link} to='settings'>
        <SettingsIcon />
        <span>Settings</span>
      </NavLink>
    </div>
  );
};

export default MobileNavigation;
