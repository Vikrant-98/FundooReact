import React from 'react';
import './App.css';
import Login from './component/login/login';
import Register from './component/registrer/register';
import Dashboard from './component/dashboard/dashboard';
import Error from './component/Error/error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ProtectedRoute} from '../src/services/auth/protected';
import Trash from '../src/component/trash/trash';
import Archive from '../src/component/archive/archive';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <ProtectedRoute path={'/dashboard'} component={Dashboard} />
          <BrowserRouter>
            <ProtectedRoute	path={"/dashboard/trash"} component={Trash}/>
            <ProtectedRoute	path={"/dashboard/archive"} component={Archive}/>
          </BrowserRouter>
        <Route component={Error}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
