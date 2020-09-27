import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ButtonAppBar from "./components/navbar.js";
import "./App.css";
import { Domain } from "@material-ui/icons";
import Home from "./components/pages/home";
import Strategy from "./components/pages/strategy";
import Scope from "./components/pages/scope";
import Skeleton from "./components/pages/skeleton";
import Structure from "./components/pages/structure";
import Surface from "./components/pages/surface";

function App() {

  return (

    <Router>
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        
      </header>
    </div>
    <Switch>
    <Route exact path="/">
      <Home />
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
    </Switch>
    </Router>
  );
}

export default App;
