import React, {useContext, useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import MyContext from './myContext';

function Profile(){
    const {globalVarUsername, setGlobalVarUsername} = useContext(MyContext);
    const {globalVarEmail, setGlobalVarEmail} = useContext(MyContext);

    function seeGlobals(){
        console.log(globalVarEmail)
        console.log(globalVarEmail)
    }

    return (
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Profile</h1>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>Username: {globalVarUsername}</h5>
                <h5 style={{width:"600px", textAlign:"left", paddingLeft:"10px"}}>Email: {globalVarEmail}</h5>
                <button  class="invertButton" onClick={() => seeGlobals()}>Test Name change</button>

            </div>
        </div>
    ); 
}

export default Profile;