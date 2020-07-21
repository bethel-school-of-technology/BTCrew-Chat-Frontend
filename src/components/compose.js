import React from 'react'
import { Link } from 'react-router-dom';
export default class Compose extends React.Component{
    render(){
        return(
        <div>
        <header className="composeheader">
        <p>Compose a message!</p>
      </header>
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
        </body>
        <footer className="composefooter">
        <div>
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
        </div>
      </footer>
      </div>)
    }
}