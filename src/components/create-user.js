import React, {Component} from 'react';
import Validation from 'react-validation';
import "../validation.js";

export default class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            messagePublic: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password:  this.state.password,
            messagePublic: this.state.email
        }
        console.log(data)
        fetch("/users/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
                    <label>First Name</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='' name='firstName' validations={['required']}/>
                    <label>Last Name</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='' name='lasttName' validations={['required']}/>
                    <label>UserName</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='' name='userName' validations={['required']}/>
                    <label>password</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='Password' name='password' validations={['required', 'password']}/>
                    <div className="submit-section">
                        <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                    </div>
                </Validation.components.Form>
            </div>
        );
    }
}