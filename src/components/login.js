import React from 'react'
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
      </body>
    </div>)
    }
}

