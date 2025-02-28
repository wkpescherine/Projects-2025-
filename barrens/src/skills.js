import React, {useState, useContext} from 'react';

import MyContext from "./myContext"

function Skills(){
    const {globalActionPort, setGlobalActionPort} = useContext(MyContext);

    function exitSkillsView(){
        setGlobalActionPort("Adventure")
    }

    return(
        <div>
            <p>Character Skills</p>
            <p>Skill Name:</p>
            <p>Desc :</p>
            <p>Effect: </p>
            <button onClick={exitSkillsView}>Exit</button>
        </div>
    )
}

export default Skills;