import React, {useState} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

const CreateMessage = withRouter (({ history }) => {


	const [message, setMessage] = useState("");

	const url = "http://localhost:3000/users/messages"

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(message);
		let user = {

			password: message
	}
		let response = await axios.post(`${url}/createMessage`, user);

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

                    />
         <span className="px-1 text-sm text-gray-600">Message</span>

          <textarea
                    
                   onChange={e => setMessage(e.target.value)}
                   name="Your Message"
                   className="MessageinputForm"
                    value={this.state.Message}
                    placeholder="Type a message"
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
            
            
export default CreateMessage;
        
        