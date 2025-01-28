import { useState } from 'react';

import Home from "./home"
import Adventure from "./adventure"

function Actionport(){
    const[actionPortView, setActionPortView] = useState("home") 

    const handleViewChange = (data) => {
        setActionPortView(data)
    }
    return(
        <div style={{width:"400px", background:"#999", margin:"5px"}}>
            {actionPortView === "home" && <Home getData={handleViewChange}/>}
            {actionPortView === 'adventure' && <Adventure />}
        </div>
    );
}

export default Actionport;