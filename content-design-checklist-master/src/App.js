import React, {useReducer} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ButtonAppBar from "./components/navbar.js";
import "./App.css";
import Home from "./components/pages/home";
import Strategy from "./components/pages/strategy";
import Scope from "./components/pages/scope";
import Skeleton from "./components/pages/skeleton";
import Structure from "./components/pages/structure";
import Surface from "./components/pages/surface";
import Checklist from "./components/pages/checklist";
import ChecklistContext from './components/services/CheckListContext.js';
import {reducer} from './components/services/useLocalStorage';
import addedAlert from "./components/alerts.js";
import Footer from "./components/footer.js";

function App() {
  /* Add the reducer to the application */

  const [checklist, dispatch] = useReducer(reducer, []) 

  return (
    /* Set the context around the entire application so the checklist can be edited from all areas */

    <ChecklistContext.Provider value={{checklist, dispatch}}>

    <Router>
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
      <addedAlert />

      </header>
    </div>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/strategy">
      <Strategy />
    </Route>
    <Route path="/scope">
      <Scope />
    </Route>
    <Route path="/skeleton">
      <Skeleton />
    </Route>
    <Route path="/structure">
      <Structure />
    </Route>
    <Route path="/surface">
      <Surface />
    </Route>
    <Route path="/checklist">
      <Checklist />
    </Route>
    </Switch>
    <Footer />
    </Router>
    </ChecklistContext.Provider>
  );
}

export default App;
