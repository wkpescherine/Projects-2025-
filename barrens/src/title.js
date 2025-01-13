import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom'
import './index.css';

function Title() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    function RedirectToCreateAccount(){ navigate('./create')}

    function RedirectUnderDev(){
        if((logInUsername === "Test") && (logInPassword=== "Test@01")){
            navigate('./viewport')
        }
    }

    return (
        <div>
            <h1>BARRENS</h1>
            <p>
                <input class="inputField" type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input class="inputField" type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <p>
                <button class='invertButton' onClick={RedirectUnderDev}>Login</button> 
                <button class='invertButton' onClick={RedirectToCreateAccount}>Create Account</button>
            </p>
            <p>version 0.1</p>
        </div>
    );
}

export default Title;