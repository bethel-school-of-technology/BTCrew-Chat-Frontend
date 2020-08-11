import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import signup from './components/signup';
import login from './components/login';
import createMessage from './components/create-message';
import ChatroomHome from './components/Main/ChatroomHome';

  function App() {
    return (<Router>
      <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1 className= "navbar-nav">BTCrew Chatroom</h1>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/signup"}>Signup</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/chatroom"}>Chatroom</Link>
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
              <Route path="/createMessage" component={createMessage} />
              <Route path="/chatroom" component={ChatroomHome} />
            </Switch>
          </div>
        </div>
      </div>
      </div>
  </Router>
  )
}

export default App;
