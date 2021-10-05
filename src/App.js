import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Planner from "./pages/Planner";
import "./App.module.css";

function App() {
  return (
    <div className='app'>
      <Navigation />

      <Route path='/recipes'>
        <Recipes />
      </Route>
      <Route path='/planner'>
        <Planner />
      </Route>
    </div>
  );
}

export default App;
