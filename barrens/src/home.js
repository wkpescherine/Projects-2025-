import React, {useState} from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';

import CreateChar from "./charcreate"

function Home(){
    const[homeView,setHomeView] = useState ("");

    function setActionCreate(){
        if(homeView=="create"){
            setHomeView("")
        }else{
            setHomeView("create")
        } 
    }
    
    function setActionStart(){
        if(homeView=="start"){
            setHomeView("")
        }else{
            setHomeView("start")
        } 
    }
    
    return(
        <div style={{justifyContent:"center"}}>
            {homeView === "create" && <CreateChar/>}
            <button style={{width: "100px"}} onClick={setActionCreate}>Create Character</button>
            <button style={{width: "100px"}}>Load Character</button>
            <button style={{width: "100px"}}>Delete Character</button>
            <button style={{width: "100px"}} onClick={setActionStart}>Start <br></br> Game</button>
        </div>
    )
}

export default Home;