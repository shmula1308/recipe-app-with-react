import React from "react";
import logo from "../../assets/salad.png";
import { Route, NavLink } from "react-router-dom";
import classes from "./DesktopNavigation.module.css";

import HomeIcon from "../../svg/HomeIcon";
import PlannerIcon from "../../svg/PlannerIcon";
import ShoppingListIcon from "../../svg/ShoppingListIcon";
import NewRecipeIcon from "../../svg/NewRecipeIcon";
import SettingsIcon from "../../svg/SettingsIcon";

const DesktopNavigation = (props) => {
  // let navClasses = props.showSideNav ? classes.nav : classes.hideNav;

  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes["nav-list"]}>
          <li className={classes["top-nav"]}>
            <NavLink className={classes["top-nav-link"]} to='/recipes'>
              <img src={logo} alt='logo' />
              <span className={classes["logo-text"]}>Ché Shpend</span>
            </NavLink>
          </li>

          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='/recipes'>
              <HomeIcon />
              <span>Recipes</span>
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='/planner'>
              <PlannerIcon />
              <span>Planner</span>
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='/shopping-list'>
              <ShoppingListIcon />
              <span>Shopping List</span>
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes.link} to='/new-recipe'>
              <NewRecipeIcon />
              <span>New Recipe</span>
            </NavLink>
          </li>
        </ul>

        <ul className={classes["nav-list"]}>
          <li className={classes.settings}>
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

export default DesktopNavigation;
