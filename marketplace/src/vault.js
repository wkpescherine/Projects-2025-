import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Vault(){
    return (
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Vault</h1>
            </div>
            <div>
                <p>Bones       :</p>
                <p>Gold Coins  :</p>
                <p>Silver Coins:</p>
                <p>Apple Coins :</p>
                <p>Google Coins:</p>
            </div>
        </div>
    ); 
}

export default Vault;