import React from 'react';
import './index.css';
import { useState } from 'react';

import Window from "./windowport"
import Action from "./actionport"
import ActionBar from "./actionbar"
import Char from "./charport"

function Viewport(){
    const[actionBarSelection, setActionBarSelection] = useState("")

    const handleActionView = (select) =>{
        setActionBarSelection(select)
    }
    
    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <div>
                <h5>Barrens</h5>
                <div style={{display: "flex", height: "450px"}}>
                    <Window />
                    {actionBarSelection ==="home" && <Action sendSelection={actionBarSelection} />}
                    
                </div>
                <Char />
                <ActionBar getResp={handleActionView}/>
            </div>
        </div>
    );   
}

export default Viewport;