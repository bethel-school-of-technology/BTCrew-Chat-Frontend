import React from 'react'
import { Link } from 'react-router-dom';
export default class Login extends React.Component{
    render(){
        return (
        <div className="App">
        <header className="App-header">
        <p>Sign In</p>
      </header>
      <body className="App-body">
      <form>
        <p>Username:</p>
        <input></input>
        <p>Password:</p>
        <input></input>
        <br/>
        <br/>
        <button>Log In</button>
        <br/>
        <br/>
        <button>Sign Up</button>
        </form>
        <Link to="/signup">hello signin</Link>
      </body>
    </div>)
    }
}

