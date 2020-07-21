import React from 'react'
import { Link } from 'react-router-dom';
export default class Login extends React.Component{
    render(){
        return (
        <div className="App">
        <header className="App-header">
        <p>Sign In</p>
      </header>
      <body className="loginbody">
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
        <br/>
        <br/>
        <Link to="/compose">link to Compose</Link>
        <br/>
        <br/>
        <Link to="/">link to Login</Link>
        <br/>
        <br/>
        <Link to="/signup">link to Signup</Link>
        <br/>
        <br/>
        <Link to="/messages">link to Messages</Link>
      </body>
    </div>)
    }
}

