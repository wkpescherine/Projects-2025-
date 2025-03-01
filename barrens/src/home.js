import React, {useState, useContext} from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';

import CreateChar from "./components/actioncomps/charcreate"
import HomeInfo from "./homeinfo"
import LoadChar from "./loadchar"
import DelChar from "./delchar"
import MyContext from "./myContext"

function Home(){
    const[homeView,setHomeView] = useState ("home");
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext)

    function setActionCreate(){
        if(homeView=="create"){
            setHomeView("home")
        }else{
            setHomeView("create")
        } 
    }

    function setActionLoad(){
        if(homeView=="load"){
            setHomeView("home")
        }else{
            setHomeView("load")
        } 
    }
    function setActionDelete(props){
        if(homeView=="delete"){
            setHomeView("home")
        }else{
            setHomeView("delete")
        } 
    }
    
    function setActionStart(){
        setGlobalActionPort("Adventure")
    }
    
    return(
        <div style={{justifyContent:"center"}}>
            {homeView === "create" && <CreateChar/>}
            {homeView === "home" && <HomeInfo/>}
            {homeView === "delete" && <DelChar/>}
            {homeView === "load" && <LoadChar/>}
            <button style={{width: "100px"}} onClick={setActionCreate}>Create Character</button>
            <button style={{width: "100px"}} onClick={setActionLoad}>Load Character</button>
            <button style={{width: "100px"}} onClick={setActionDelete}>Delete Character</button>
            <button style={{width: "100px"}} onClick={setActionStart}>Start <br></br> Game</button>
        </div>
    )
}

export default Home;