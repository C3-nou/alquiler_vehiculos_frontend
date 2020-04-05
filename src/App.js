import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import Forgot from './components/forgot_password/forgot';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Login}/>
        <Route exact path={"/register"} component={Register}/>
        <Route exact path={"/forgot"} component={Forgot}/>
        <Route exact path={"/home"} render={() => <div>Home</div>  } />
      </Switch>
    </div>
  )
}

export default App;
