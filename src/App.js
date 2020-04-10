import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Header from './components/sidenav/sidenav';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Login}/>
        <Route exact path={"/register"} component={Register}/>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/header"} component={Header} />
      </Switch>
    </div>
  )
}

export default App;
