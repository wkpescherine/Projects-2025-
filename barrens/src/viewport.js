import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom'
import './index.css';

import Window from "./windowport"
import Action from "./actionport"
import ActionBar from "./actionbar"

function Viewport(){
    let navigate = useNavigate();

    function RedirectToTitle(){ navigate('/')}

    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <div>
                <h2>Viewport</h2>
                <div style={{display: "flex", height: "350px"}}>
                    <Window />
                    <Action />
                </div>
                <ActionBar />
                <button class='invertButton' onClick={RedirectToTitle}>Exit</button>
            </div>
        </div>
    );   
}

export default Viewport;