import React from 'react'
import { Link } from 'react-router-dom';
export default class Signup extends React.Component{
    render(){
        return(
        <body>
        <p>Signup works!</p>
        <Link to="/compose">hello signup</Link>
        </body>
        )
    }
}