import React from 'react';
import './App.css';
import Login from './component/login/login';
import Register from './component/registrer/register';
import Dashboard from './component/dashboard/dashboard';
import Error from './component/Error/error';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
