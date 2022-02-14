import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage.js";
import Home from "./Components/Home.js";
import Recipes from "./Components/Recipes.js";
import NavBar from "./Components/NavBar.js";
import FormRecipe from "./Components/FormRecipe.js";
import About from "./Components/About.js";


function App() {
  return (
    <div className="App">
      <Route>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/" component={NavBar} />
        </Switch>
        <Route>
          <Route path="/home" component={Home} />
          <Route exact path="/recipe/:id" component={Recipes} />
          <Route path="/create" component={FormRecipe} />
          <Route path="/about" component={About} />
        </Route>
      </Route>
    </div>
  );
}

export default App;
