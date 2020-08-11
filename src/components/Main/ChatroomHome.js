import React, { Component } from "react";
import axios from 'axios'


class ChatroomHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      recipient: "Ginger01",
      url: "http://localhost:3001"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Message Submitted!' + this.state.value);
    event.preventDefault();
    let newMessage = {

      Message: this.state.message,
      Recipient: this.state.recipient
  }

  let myHeaders = {
      authorization: `Bearer ${localStorage.getItem('JWT')}`
  }
  axios.post(`${this.state.url}/messages/compose/public`, newMessage, { headers: myHeaders })
      .then(response => {
          console.log(response);
          if (response.data.status === 401) {
              window.alert('No token send');
              // // history.push('/messages')
          }
      })
  }

  render() {
    return (
      <div>
        <h1>Let's Chat</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Send Your Message Here:
          <textarea value={this.state.message} name="message" onChange={this.handleChange} />
          </label>
          <label>
            Enter Recipient Name
          </label>
          <input type="text" value={this.state.recipient} name="recipient" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default ChatroomHome;