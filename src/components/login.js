import React from 'react'
import { Link } from 'react-router-dom';
export default class Login extends React.Component{
    render(){
        return (
        <div>
        <header className="loginheader">
        <p>Login!</p>
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
      </body>
      <footer className="loginfooter">
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
      </footer>
    </div>)
    }
}

