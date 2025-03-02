import { useState } from "react";

function Charcreate(){
    const[str,setStr] = useState(0)
    const[strBonus,setStrBonus] = useState(0)
    const[dex,setDex] = useState(0)
    const[qui,setQui] = useState(0)
    const[iq,setInt] = useState(0)
    const[pie,setPie] = useState(0)
    const[con,setCon] = useState(0)
    const[role,setRole] = useState("")

    function builder(){
        setValues()
        setBonus()
    }

    function setBonus(){
        for(let b = 0; b<5; b++){
            let bonusBlock=[0,1,3,6,10,15,21,28]
            for(let c = 0; c<10; c++){
                if(b === 0){
                    if(str >= bonusBlock[c]){
                        setStrBonus(c)
                        console.log(c)
                    }
                }
            }
        }
    }

    function setValues(){
        var minInt = 1;
        var maxInt = 20;

        for(let a = 0; a < 5; a++){
            var randNumber = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
            if(a === 0){setStr(randNumber)}
            if(a === 1){setDex(randNumber)}
            if(a === 2){setQui(randNumber)}
            if(a === 3){setInt(randNumber)}
            if(a === 4){setPie(randNumber)}
            if(a === 5){setCon(randNumber)}
        }
    }

    const selectClass = (selection) => {
        setRole(selection)
    }

    return (
        <div style={{height:"400px"}}>
            <p>Create Character</p>
            <p>Class:{role}</p>
            <p>STR:{str}+{strBonus} QUI:{qui} PIE:{pie}</p>
            <p>DEX:{dex} INT:{iq} CON:{con}</p>
            <button onClick={builder}>Randomize</button>
            <div>
                {str >= 5 && <button onClick={() => selectClass("Fighter")}>Fighter</button>}
                {str >= 10 && <button onClick={() => selectClass("Barbarian")}>Barbarian</button>}
                {iq >= 5 && <button onClick={() => selectClass("Mage")}>Mage</button>}
            </div>
        </div>
    )
}

export default Charcreate;