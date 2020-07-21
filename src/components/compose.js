import React from 'react'
import { Link } from 'react-router-dom';
export default class Compose extends React.Component{
    render(){
        return(
            <body>
        <p>Compose works!</p>
        <Link to="/messages">hello signup</Link>
        </body>
        )
    }
}