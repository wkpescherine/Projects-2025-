import React, {useState} from 'react';
//import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom'
import './index.css';

import Create from "./create"

function Title() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");
    const[createAccount,setCreateAccount] = useState ("");
    const[logInMessage,setLogInMessage] = useState("");
    const[subDate,setSubDate] = useState (31);
    const[subMonth,setSubMonth] = useState (2);
    const[subYear,setSubYear] = useState (2025);

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    function RedirectToCreateAccount(){
        if(createAccount === ""){
            setCreateAccount("Create")
        }else{
            setLogInMessage("")
            setCreateAccount("")
        }
    }

    function validateAccount(){
        const current = new Date();
        const currentDate = current.getDate();
        const currentMonth = current.getMonth();
        const currentYear = current.getFullYear();
        if (currentYear <= subYear){
            console.log(currentYear)
            if(currentMonth <= subMonth){
                console.log(currentMonth)
                if(currentDate <= subDate){
                    console.log(currentDate)
                    navigate('./viewport')
                }
            } else { RedirectToCreateAccount()}
        }else( RedirectToCreateAccount() )
    }

    function RedirectUnderDev(){
        if((logInUsername === "Test") && (logInPassword=== "Test@01")){
            validateAccount();
        } else {
            setLogInMessage("No account found please create one")
            RedirectToCreateAccount()
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
            {subMonth}{subDate}{subYear}
            {logInMessage}
            {
                createAccount==="Create" && < Create/>
            }
            <p>version 0.3</p>
        </div>
    );
}

export default Title;