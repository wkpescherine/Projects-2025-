import React from 'react';
import './index.css';

import Window from "./windowport"
import Action from "./actionport"
import ActionBar from "./actionbar"
import Char from "./charport"

function Viewport(){
    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <div>
                <h5>Barrens</h5>
                <div style={{display: "flex", height: "450px"}}>
                    <Window />
                    <Action />
                </div>
                <Char />
                <ActionBar />
            </div>
        </div>
    );   
}

export default Viewport;