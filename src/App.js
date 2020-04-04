import React, { useEffect, useState, Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css';

const App = () => {
  // const API_URL = 'http://localholhost:1905'

  // const [vehiculos, setVehiculos] = useState([]);

  // useEffect(
  //   getInfo(), []
  // )

  // const getInfo = async () => {
  //   const response = await fetch('')
  //   const data = response.json()
  //   setVehiculos(data);
  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Login}/>
        <Route exact path={"/register"} component={Register}/>
        <Route exact path={"/home"} render={() => <div>Home</div>  } />
      </Switch>
    </div>
  )
}

export default App;
