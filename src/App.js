import { Route, Switch, Redirect } from "react-router-dom";

import DesktopNavigation from "./components/Navigation/DesktopNavigation";
import MobileNavigation from "./components/Navigation/MobileNavigation";

import Recipes from "./pages/Recipes/Recipes";
import Planner from "./pages/Planner/Planner";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import Settings from "./pages/Settings/Settings";

import classes from "./App.module.css";
import RecipeDescription from "./pages/Recipes/RecipeDescription";

function App() {
  return (
    <div className='app'>
      <DesktopNavigation />
      <MobileNavigation />
      <main className={classes.main}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/recipes' />
          </Route>
          <Route path='/recipes' exact>
            <Recipes />
          </Route>
          <Route path='/recipes/:recipeId'>
            <RecipeDescription />
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
