import React, {useContext, useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import MyContext from './myContext';

function Profile(){
    const {globalVarUsername, setGlobalVarUsername} = useContext(MyContext);
    const {globalVarEmail, setGlobalVarEmail} = useContext(MyContext);

    return (
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Profile</h1>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>Username: {globalVarUsername}</h5>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>Email: {globalVarEmail}</h5>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>Address:</h5>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>City:</h5>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>State: {globalVarEmail}</h5>
            </div>
        </div>
    ); 
}

export default Profile;