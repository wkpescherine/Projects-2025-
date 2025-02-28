import { useState , useContext} from 'react';

import Home from "./home"
import Adventure from "./adventure"
import MyContext from "./myContext"
import Character from "./character"
import Inventory from "./inventory"
import Skills from "./skills"

function Actionport(){
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    return(
        <div style={{width:"400px", background:"#999", margin:"5px"}}>
            {globalActionPort === "Home" && <Home/>}
            {globalActionPort === "Adventure" && <Adventure/>}
            {globalActionPort === "Character" && <Character/>}
            {globalActionPort === "Inventory" && <Inventory/>}
            {globalActionPort === "Skills" && <Skills/>}
        </div>
    );
}

export default Actionport;