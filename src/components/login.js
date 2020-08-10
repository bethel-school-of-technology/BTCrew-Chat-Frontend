import React, {useState} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'

const Login = withRouter (({ history }) => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const url = "http://localhost:3000/users"

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(username, password);
		let user = {
			username: username,
			password: password
	}
		let response = await axios.post(`${url}/login`, user);

		console.log(response.data);
		if(response.data.status === 200) {
			localStorage.setItem('BSTtoken', response.data.jwt)
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
                        <input type="text"className="form-control"
                         onChange={e =>setUsername(e.target.value)} 
                         placeholder="Enter First Name"/>
                    </div>
                   
                    <div className="form-group">
                      <input type="password" className="form-control" 
                         onChange={e =>setPassword(e.target.value)} 
                         placeholder="Enter Password"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" OnSubmit={handleSubmit} value="Signup" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>

    ); 
    });



export default Login;