import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router'


const Private = withRouter(({ history }) => {


    const [message, setMessage] = useState("");
    const [recipient, setRecipient] = useState("");


    const url = "http://localhost:3001"

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newMessage = {

            Message: message,
            Recipient: recipient
        }

        let myHeaders = {
            authorization: `Bearer ${localStorage.getItem('JWT')}`
        }
        axios.post(`${url}/messages/compose/private`, newMessage, { headers: myHeaders })
            .then(response => {
                console.log(response);
                if (response.data.status === 401) {
                    window.alert('No token send');
                    history.push('/signin')
                }
            })
    };

    return (
        <div>
            <input

            />
            <span className="px-1 text-sm text-gray-600">Message</span>

            <textarea

                onChange={e => setMessage(e.target.value)}
                name="Your Message"
                className="MessageinputForm"
                value={message}
                placeholder="Type a message"
            />
            <input onChange={e => setRecipient(e.target.value)}
            name="Recipient"
            className="MessageInputForm"
            value={recipient}
            placeholder="Enter Recipient Name" 
            />
            <div className="mt-8" onSubmit={handleSubmit}></div>
            <button
                className="submitbutton"
                type="submit"
                onClick={this.addToMessages}

            >
                Submit your Message<i className="Messages" aria-hidden="true" />
            </button>
        </div>
    );
});


export default Private;

