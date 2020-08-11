import React, { useState} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'

const signup = withRouter (({ history }) => {

	const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const url = "http://localhost:3001/users"

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(firstName, lastName, username, password);
		let user = {
			firstName: firstName,
			lastName: lastName,
            username: username,
            password: password
	}
		let response = await axios.post(`${url}/signup`, user);

		console.log(response.data);
		if(response.data.status === 200) {
			localStorage.setItem('JWT', response.data.jwt)
			window.alert(response.data.message);
            history.push('/login');
            
        
	}else{
		window.alert(response.data.message);
		history.push('/')
    }   

};
        return (
            <div className="wrapper">
               <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <input type="text"className="form-control" value={firstName}
                         onChange={e =>setFirstName(e.target.value)} 
                         placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                    <input type="text"className="form-control" value={lastName}
                         onChange={e =>setLastName(e.target.value)} 
                         placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                    <input type="text"className="form-control" value={username}
                         onChange={e =>setUsername(e.target.value)} 
                         placeholder="Username"/>
                    </div>

                    <div className="form-group">
                    <input type="password"className="form-control" value={password}
                         onChange={e =>setPassword(e.target.value)} 
                         placeholder="Password"/>

                    </div>

                    <div className="form-group">
                    <input type="submit" value="Signup" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        ); 
    });



export default signup;