import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Create() {
    let navigate = useNavigate();

    function RedirectToHome(){
        navigate('/')
    }
    return (
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Create Account</h1>
                <button onClick={RedirectToHome}>Exit</button> 
            </div>
        </div>
    ); 
}

export default Create;