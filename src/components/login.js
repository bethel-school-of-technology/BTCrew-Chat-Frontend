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
            history.push('/profile');
            
        
	}else{
		window.alert(response.data.message);
		history.push('/')
    }   

};

    return (
        <div className="container max-w-full mx-auto md:py-24 px-6">
        <div className="text-center text-2x1">LOGIN</div>
        <div className="w-full relative">
        <div className="md:mt-6">
        <div className="mt-8" onSubmit={handleSubmit}>
        <div className="mx-auto max-w-lg">
            <div className="py-1">
                <span className="px-1 text-sm text-gray-600">UserName</span>
                <input placeholder="Enter Username" type="text" value={username}  
                onChange={e =>setUsername(e.target.value)} />
                <span className="px-1 text-sm text-gray-600">UserName</span>               
                <input placeholder="Enter Password" type="text" value={password}  
                onChange={e =>setPassword(e.target.value)}
                />
        </div>
        </div>
        </div>
        </div>
        </div>
         </div>
    ); 
}
}

export default Login;