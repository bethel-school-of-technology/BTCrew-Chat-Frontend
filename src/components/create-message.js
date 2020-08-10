import React, {useState} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'

const CreateUser = withRouter (({ history }) => {

	const [username, setUsername] = useState("");
	const [message, setMessage] = useState("");

	const url = "http://localhost:3000/users/messages"

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(username, message);
		let user = {
			username: username,
			password: message
	}
		let response = await axios.post(`${url}/create-user`, user);

		console.log(response.data);
		if(response.data.status === 200) {
			localStorage.setItem('BSTtoken', response.data.jwt)
			window.alert(response.data.message);
            history.push('/messages');       
        
    }
    else{
		window.alert(response.data.message);
		history.push('/')
    }   

};

       return (
                    <div>
        <input
                   onChange={e => setUsername(e.target.value)}
                   name="Your User Name"
                   className="NameinputForm"
                   value={this.state.Username}
                   placeholder="Enter your name"
                    />
         <span className="px-1 text-sm text-gray-600">Message</span>

          <textarea
                    
                   onChange={e => setMessage(e.target.value)}
                   name="Your Message"
                   className="MessageinputForm"
                    value={this.state.Message}
                    placeholder="Type a message"
                       />
        
            <button
                    className="submitbutton"
                    type="submit"
                    onClick={this.addToMessages}
                      >
                    Submit your Message<i className="Messages" aria-hidden="true" />
                    </button>
                    </div>
                )
        
                }
            }

            
export default CreateMessage;
        
        