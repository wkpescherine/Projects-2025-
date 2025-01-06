import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Sidebar(props) {
    let navigate = useNavigate();
    
    function RedirectToExit(){
        navigate('/')
    }

    return (
        <div>
            <button class="invertButton" onClick={() => props.getData("Home")}>Home</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Home")}>Home</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Account")}>Account</button> 
            <br></br>
            <button onClick={() => props.getData("Search")}>Search</button> 
            <br></br>
            <button onClick={() => props.getData("List")}>Patient List</button> 
            <br></br>
            <button onClick={() => props.getData("Billing")}>Billing</button> 
            <br></br>
            <button onClick={() => props.getData("Finances")}>Finances</button> 
            <br></br>
            <button onClick={() => props.getData("Settings")}>Settings</button> 
            <br></br>
            <button onClick={() => props.getData("About")}>About</button> 
            <br></br>
            <button class='sidebarbutton' onClick={RedirectToExit}>Exit</button>  
        </div>
    ); 
}

export default Sidebar;