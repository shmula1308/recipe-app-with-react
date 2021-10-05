import React from "react";
import { Route, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

import BurgerIcon from "../../svg/BurgerIcon";
import HomeIcon from "../../svg/HomeIcon";
import PlannerIcon from "../../svg/PlannerIcon";
import ShoppingListIcon from "../../svg/ShoppingListIcon";
import NewRecipeIcon from "../../svg/NewRecipeIcon";
import SettingsIcon from "../../svg/SettingsIcon";

const Navigation = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes["nav-list"]}>
          <div>
            <li className={classes.burger}>
              <BurgerIcon />
            </li>
          </div>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='recipes'>
              <HomeIcon />
              <span>Recipes</span>
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='planner'>
              <PlannerIcon />
              <span>Planner</span>
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='shopping-list'>
              <ShoppingListIcon />
              <span>Shopping List</span>
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='new-recipe'>
              <NewRecipeIcon />
              <span>New Recipe</span>
            </NavLink>
          </li>
        </ul>

        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='settings'>
              <SettingsIcon />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
