import React, {useState, useContext} from 'react';

import MyContext from "./myContext"

function Inventory(){
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    function exitInventoryView(){
        setGlobalActionPort("Adventure")
    }

    return(
        <div>
            <p>Character Inventory</p>
            <p>Head :</p>
            <p>Body :</p>
            <button onClick={exitInventoryView}>Exit</button>
        </div>
    )
}

export default Inventory;