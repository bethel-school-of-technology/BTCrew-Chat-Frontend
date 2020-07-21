import React from 'react'
import { Link } from 'react-router-dom';
export default class Signup extends React.Component{
    render(){
        return(
        <body className="signupbody">
        <form>
        <p>Username:</p>
        <input></input>
        <p>Password:</p>
        <input></input>
        <p>Repeat Password:</p>
        <input></input>
        </form>
        <br/>
        <br/>
        <button>Signup!</button>
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
        )
    }
}