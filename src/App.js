import DesktopNavigation from "./components/Navigation/DesktopNavigation";
import MobileNavigation from "./components/Navigation/MobileNavigation";
import { Route, Switch } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Planner from "./pages/Planner";
import ShoppingList from "./pages/ShoppingList";
import NewRecipe from "./pages/NewRecipe";
import Settings from "./pages/Settings";
import "./App.module.css";

function App() {
  return (
    <div className='app'>
      <DesktopNavigation />
      <MobileNavigation />
      <main>
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
