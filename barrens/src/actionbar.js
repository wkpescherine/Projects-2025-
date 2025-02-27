import {useNavigate} from 'react-router-dom'
import React, {useState, useContext} from 'react';

import MyContext from "./myContext"

function Actionbar(){
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    let navigate = useNavigate();

    function RedirectToTitle(){ navigate('/')}

    function setResponseHome(){
        setGlobalActionPort("Home")
    }

 

    return(
        <div style={{width:"810px", height:"40px", background:"#999", margin:"5px"}}>
            <button style={{height:"35px", margin: "3px"}} onClick={setResponseHome}>Home</button>
            <button style={{height:"35px", margin: "3px"}}>Char</button>
            <button style={{height:"35px", margin: "3px"}}>Inv</button>
            <button style={{height:"35px", margin: "3px"}}>Skills</button>
            <button style={{height:"35px", marginTop: "3px"}} onClick={RedirectToTitle}>Exit</button>
        </div>
    );
}

export default Actionbar;