import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Compose from './components/compose';
import Messages from './components/messages';

const routing = (
  <BrowserRouter>
  
  <Switch>
    <Route exact path="/" component={Login}></Route>
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
