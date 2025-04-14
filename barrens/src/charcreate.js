import { useState } from "react";

import CharName from "./components/actioncomps/completecreate"

function Charcreate(){
    const[str,setStr] = useState(0)
    const[strBonus,setStrBonus] = useState(0)
    const[dex,setDex] = useState(0)
    const[dexBonus,setDexBonus] = useState(0)
    const[qui,setQui] = useState(0)
    const[quiBonus,setQuiBonus] = useState(0)
    const[iq,setInt] = useState(0)
    const[iqBonus,setIQBonus] = useState(0)
    const[pie,setPie] = useState(0)
    const[pieBonus,setPieBonus] = useState(0)
    const[con,setCon] = useState(0)
    const[conBonus,setConBonus] = useState(0)
    const[role,setRole] = useState("")

    const setValues = () =>{
        setRole("")
        setStrBonus(0)
        setDexBonus(0)
        setIQBonus(0)
        setQuiBonus(0)
        setPieBonus(0)
        setConBonus(0)
        var minInt = 1;
        var maxInt = 20;
        setStrBonus(0)
        setDexBonus(0)
        for(let a = 0; a <= 5; a++){
            var randNumber = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
            if(a === 0){setStr(randNumber)}
            if(a === 1){setDex(randNumber)}
            if(a === 2){setQui(randNumber)}
            if(a === 3){setInt(randNumber)}
            if(a === 4){setPie(randNumber)}
            if(a === 5){setCon(randNumber)}
        }
    }

    function setBonus(){
        for(let b = 0; b<=5; b++){
            const bonusBlock=[0,1,3,6,10,15,21,28]
            for(let c = 0; c<10; c++){
                if(b === 0){
                    if(str >= bonusBlock[c]){
                        setStrBonus(c)
                    }
                }
                if(b === 1){
                    if(dex >= bonusBlock[c]){
                        setDexBonus(c)
                    }
                }
                if(b === 2){
                    if(qui >= bonusBlock[c]){
                        setQuiBonus(c)
                    }
                }
                if(b === 3){
                    if(iq >= bonusBlock[c]){
                        setIQBonus(c)
                    }
                }
                if(b === 4){
                    if(pie >= bonusBlock[c]){
                        setPieBonus(c)
                    }
                }
                if(b === 5){
                    if(con >= bonusBlock[c]){
                        setConBonus(c)
                    }
                }
            }
        }
    }

    const selectClass = (selection) => {
        setRole(selection)
        setBonus()
    }

    return (
        <div style={{height:"390px"}}>
            <p>Create Character</p>
            <p>Class:{role}</p>
            <p>STR:{str}+{strBonus} QUI:{qui}+{quiBonus} PIE:{pie}+{pieBonus}</p>
            <p>DEX:{dex}+{dexBonus} INT:{iq}+{iqBonus} CON:{con}+{conBonus}</p>
            <button onClick={setValues}>Randomize</button>
            <div>
                {str >= 5  && str <=10 && <button onClick={() => selectClass("Fighter")}>Fighter</button>}
                {str >= 11 && <button onClick={() => selectClass("Barbarian")}>Barbarian</button>}
                {iq >= 5   && iq <=10  && <button onClick={() => selectClass("Mage")}>Mage</button>}
                {iq >= 11  && <button onClick={() => selectClass("Wizard")}>Wizard</button>}
                {pie >= 5  && pie <=10 && <button onClick={() => selectClass("Priest")}>Priest</button>}
                {pie >= 11 && <button onClick={() => selectClass("Cleric")}>Cleric</button>}
                {dex >= 5  && dex<= 10 && <button onClick={() => selectClass("Rogue")}>Rogue</button>}
                {dex >= 11 && <button onClick={() => selectClass("Assassin")}>Assassin</button>}
            </div>
            {role != "" && <CharName/>}
        </div>
    )
}

export default Charcreate;