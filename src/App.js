import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import DesktopNavigation from "./components/Navigation/DesktopNavigation";
import MobileNavigation from "./components/Navigation/MobileNavigation";

import Recipes from "./pages/Recipes/Recipes";
import Planner from "./pages/Planner/Planner";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import Settings from "./pages/Settings/Settings";

import classes from "./App.module.css";

function App() {
  const [width, setWindowWidth] = useState(null);

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    let width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showDesktopNav: width > 950,
    showMobileNav: width <= 950,
  };

  const { showDesktopNav, showMobileNav } = responsive;

  let mainClasses = showDesktopNav ? classes.main : classes["main-no-sidenav"];
  return (
    <div className='app'>
      {responsive.showDesktopNav && <DesktopNavigation />}
      {responsive.showMobileNav && <MobileNavigation />}
      <main className={mainClasses}>
        <Route path='/recipes'>
          <Recipes />
        </Route>
        <Route path='/planner'>
          <Planner />
        </Route>
        <Route path='/shopping-list'>
          <ShoppingList />
        </Route>
        <Route path='/new-recipe'>
          <NewRecipe />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </main>
    </div>
  );
}

export default App;
