import React, {useState} from 'react';
//import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom'
import './index.css';

import Create from "./create"
import Renewal from "./renewSub"

function Title() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");
    const[createAccount,setCreateAccount] = useState ("");
    const[logInMessage,setLogInMessage] = useState("");
    const[subMonth,setSubMonth] = useState (2);
    const[subDate,setSubDate] = useState (31);
    const[subYear,setSubYear] = useState (2025);

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    function redirectToRenewSub(){
        setLogInMessage("Account subscription has expired")
        setCreateAccount("Renew")
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
            if(currentMonth <= subMonth){
                if(currentDate <= subDate){
                    navigate('./viewport')
                } else {redirectToRenewSub()}
            } else { redirectToRenewSub()}
        }else( redirectToRenewSub() )
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
                <button onClick={RedirectUnderDev}>Login</button> 
                <button onClick={RedirectToCreateAccount}>Create Account</button>
            </p>
            <h5>{logInMessage}</h5>
            {
                createAccount==="Create" && < Create/>
            }
            {
                createAccount==="Renew" && <Renewal/>
            }
                        {
                createAccount==="Create" && <button>Create</button>
            }
            {
                createAccount==="Renew" && <button>Renew</button>
            }
            {
                createAccount!=="" && <button>Clear</button>
            }
            <p>version 0.13</p>
        </div>
    );
}

export default Title;