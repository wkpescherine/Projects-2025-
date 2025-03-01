import { useState } from "react";

function Charcreate(){
    const[str,setStr] = useState(0)
    const[dex,setDex] = useState(0)
    const[qui,setQui] = useState(0)
    const[iq,setInt] = useState(0)

    function setValues(){
        var minInt = 1;
        var maxInt = 20;

        for(let a = 0; a < 6; a++){
            var randNumber = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
            if(a == 0){setStr(randNumber)}
            if(a == 1){setDex(randNumber)}
            if(a == 2){setQui(randNumber)}
            if(a == 3){setInt(randNumber)}
        }
    }

    selectClass(selection) => {

    }

    return (
        <div style={{height:"400px"}}>
            <p>Create Character</p>
            <p>STR:{str} QUI:{qui}</p>
            <p>DEX:{dex} INT:{iq}</p>
            <button onClick={setValues}>Randomize</button>
            <div>
                {str >= 5 && <button>Fighter</button>}
                {str >= 10 && <button onClick={() => selectClass("Barb")}>Barbarian</button>}
            </div>
        </div>
    )
}

export default Charcreate;