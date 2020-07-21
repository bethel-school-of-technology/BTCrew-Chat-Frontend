import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Login from './components/login';
import Signup from './components/signup';
import Compose from './components/compose';
import Messages from './components/messages';

const routing = (
  <BrowserRouter>
  
  <Switch>
    <Route exact path="/" component={App}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/compose" component={Compose}></Route>
    <Route path="/messages" component={Messages}></Route>
  </Switch>
  </BrowserRouter>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
