import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMessage extends Component {

    constructor(props) {
        super(props)

        this.onChangeMessagePublic = this.onChangeMessagePublic.bind(this);
        this.onChangeMessagePrivate = this.onChangeMessagePrivate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            messagePublic: '',
            messagePrivate: ''

        }
    }

    onChangeMessagePublic(e) {
        this.setState({ messagePublic: e.target.value })
    }

    onChangeMessagePrivate(e) {
       this.setState({ messagePrivate: e.target.value })
   }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            messagePublic: this.state.messagePublic,
            messagePrivate: this.state.messagePrivate
        };

        axios.post('http://localhost:4000/user/message', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ messagePublic: '', messagePrivate: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.state.messagePublic} onChange={this.onChangeMessagePublic} className="form-control" 
                        placeholder="Enter Public Message"/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.messagePrivate} onChange={this.onChangeMessagePrivate} className="form-control" 
                        placeholder="Enter Private Message"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Message" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}