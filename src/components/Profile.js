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

return (
        <div className="Profile-page">
          <h2>{userName}'s ProfilePage</h2>
          <div className="Profile-data">
            <div className="Profile-section">
              <h3>First Name</h3>
              <p>{firstName}</p>
            </div>
            <div className="Profile-section">
              <h3>Last Name</h3>
              <p>{lastName}</p>
            </div>
            <div className="Profile-section">
              <h3>Username</h3>
              <p>{userName}</p>
            </div>
            <div className="Profile-section">
              <h3>Password Address</h3>
              <p>{password}</p>
            </div>
            </div>
          </div>
); 
});

export default Profile;
