import React from 'react'
import { Link } from 'react-router-dom';
export default class Messages extends React.Component{
    render(){
        return(
        <body className="messagesbody">
        <h3>Jordan Alex</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed auctor tellus. In luctus blandit metus eget aliquam. Nullam ut.</p>
        <h3>Jordan Alex</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed auctor tellus. In luctus blandit metus eget aliquam. Nullam ut.</p>
        <h3>Jordan Alex</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed auctor tellus. In luctus blandit metus eget aliquam. Nullam ut.</p>
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