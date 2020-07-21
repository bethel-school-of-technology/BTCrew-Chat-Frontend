import React from 'react'
import { Link } from 'react-router-dom';
export default class Compose extends React.Component{
    render(){
        return(
        <body className="composebody">
        <form>
        <p>To:</p>
        <input></input>
        <p>Message:</p>
        <textarea></textarea>
        <br/>
        <br/>
        <button>Send!</button>
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
        )
    }
}