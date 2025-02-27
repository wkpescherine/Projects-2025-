import { useState , useContext} from 'react';

import Home from "./home"
import Adventure from "./adventure"
import MyContext from "./myContext"

function Actionport(){
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    return(
        <div style={{width:"400px", background:"#999", margin:"5px"}}>
            {globalActionPort === "Home" && <Home/>}
            {globalActionPort === "Adventure" && <Adventure/>}
        </div>
    );
}

export default Actionport;