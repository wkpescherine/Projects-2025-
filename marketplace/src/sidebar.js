import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Sidebar(props) {
    let navigate = useNavigate();
    
    function RedirectToExit(){
        navigate('/')
    }

    return (
        <div style={{justifyContent: "center", width: "200px", backgroundColor:"#333", paddingTop: "50px", paddingBottom: "100%"}}>
            <button class="invertButton" onClick={() => props.getData("Home")}>Home</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Profile")}>Profile</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Portfolio")}>Portfolio</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Markets")}>Markets</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Bank")}>Bank</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Settings")}>Settings</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("About")}>About</button> 
            <br></br>
            <button class='invertButton' onClick={RedirectToExit}>Exit</button>  
        </div>
    ); 
}

export default Sidebar;