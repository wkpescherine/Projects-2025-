import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

import Sidebar from "./sidebar"
import Display from "./display"

function Dashboard(){
    const[section,setSection] = useState ("Home");

    let navigate = useNavigate();
    
    function handleSectionChoices (selection){setSection(selection)}

    function RedirectToHome(){navigate('/')}
    return (
        <div>
            <div style={{justifyContent: "center"}}>
                <h1>Dashboard</h1>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <Sidebar getData={handleSectionChoices}/>
                    <Display sendData={section}/>
                </div>
                <button onClick={RedirectToHome}>Exit</button> 
            </div>
        </div>
    ); 
}

export default Dashboard;