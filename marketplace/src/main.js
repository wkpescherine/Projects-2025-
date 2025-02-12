import React, {useState, useContext} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import MyContext from './myContext';

function Main() {
    const {globalVarUsername, setGlobalVarUsername} = useContext(MyContext);
    const {globalVarEmail, setGlobalVarEmail} = useContext(MyContext);
    const {globalVarPassword, setGlobalVarPassword} = useContext(MyContext);
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }
    
    //function RedirectTo(){
    //    navigate('./')
    //}

    function RedirectToCreateAccount(){ 
        setGlobalVarEmail("")
        setGlobalVarUsername("")
        navigate('./create')
    }

    function RedirectUnderDev(){
        if((logInUsername === globalVarUsername) && (logInPassword=== globalVarPassword)){
            navigate('./dashboard')
        }
    }

    //function RedirectToDashboard(){ navigate('./dashboard')}

    return (
        <div>
            <p style={{fontSize: "64px"}}>Mercantus</p>
            <p>The MicroMarketplace of the future</p>
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
            <p>version 0.15</p>
        </div>
    ); 
}

export default Main;