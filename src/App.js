import React from 'react';
import './App.css';
import Login from './component/login/login';
import Register from './component/registrer/register';
import Dashboard from './component/dashboard/dashboard';
import Error from './component/Error/error';
import {Route,Switch} from 'react-router-dom';
import Snackbar from './component/snackbar/snackbar'
import {Provider} from 'react-redux';
import store from './services/redux/store/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/snack" component={Snackbar}/>
        <Route component={Error}/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
