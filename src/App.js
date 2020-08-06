import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateMessage from "./components/create-message";
import CreateUser from "./components/create-user";
import signup from './components/signup';
import login from './components/login';
import messages from './components/messages';


  function App() {
    return (<Router>
      <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <h1 className= "navbar-nav">BT Crew Chatroom</h1>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-user"}>Signup</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/users"}>Users</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-messages"}>Create Message</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/messages"}>Messages</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/messages"}>Messages</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={signup} />
              <Route path="/signup" component={signup} />
              <Route path="/login" component={login} />
              <Route path="/messages" component={messages} />

            </Switch>
          </div>
        </div>
      </div>
      </div>
  </Router>
  );
}

export default App;