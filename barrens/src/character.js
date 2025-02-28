import React, {useState, useContext} from 'react';

import MyContext from "./myContext"

function Character(){
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    function exitCharacterView(){
        setGlobalActionPort("Adventure")
    }

    return(
        <div>
            <p>Character Sheet</p>
            <p>Name :</p>
            <p>Class:</p>
            <button onClick={exitCharacterView}>Exit</button>
        </div>
    )
}

export default Character;