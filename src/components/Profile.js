import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'

const Profile = withRouter (({history}) => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

const url = "http://localhost:3000/users"

useEffect(() => {
let myHeaders = {
authorization: `Admin ${localStorage.getItem('BSTtoken')}`
}
axios.get(`${url}/profile`, {headers: myHeaders})
.then(response => {
console.log(response)
if(response.data.status === 401){
window.alert('No token sent');
history.push('/signin')
}
else{
	setFirstName(response.data.user.firstName);
	setLastName(response.data.user.lastName);
	setUserName(response.data.user.userName);
	setPassword(response.data.user.password);
}
})

})

return(
       <div className="w-full flex justify-center">
              <div className="w1/2 rounded material-card-bg-gra-200 m-4">                <span className="px-1 text-sm text-gray-600">FirstName</span>
                <input placeholder="Enter First Name" type="text" value={firstName}  
                onChange={e =>setFirstName(e.target.value)} />
                <span className="px-1 text-sm text-gray-600">LastName</span>               
                <input placeholder="Enter LastName" type="text" value={lastName}  
                onChange={e =>setLastName(e.target.value)}
                />
               <span className="px-1 text-sm text-gray-600">UserName</span>               
                <input placeholder="Enter User Name" type="text" value={userName}  
                onChange={e =>setUserName(e.target.value)}/>
                <span className="px-1 text-sm text-gray-600">UserName</span>               
                <input placeholder="Enter Password" type="text" value={password}  
                onChange={e =>setPassword(e.target.value)}/>
        </div>
        </div>

};
}
export default Profile;
