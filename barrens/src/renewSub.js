import React, {useState} from 'react';

function RenewSub(){
    const[newEmail,setNewEmail] = useState("")
    
    const handleEmailChange = (event) => {
            setNewEmail(event.target.value)
        }

    return(
        <div>
            <h1>Renewal Section</h1>
            <h3>Account Name</h3>
            <div style={{justifyContent: "center"}}>
                <p style={{padding: "3px"}}>
                    <input class="inputField" type="text" placeholder="CC Number" onChange={handleEmailChange}></input>
                </p>
                <p style={{padding: "3px"}}>
                    <input class="inputField" type="text" placeholder="Exp Date" onChange={handleEmailChange}></input>
                </p>
                <p style={{padding: "3px"}}>
                    <input class="inputField" type="text" placeholder="CSV" onChange={handleEmailChange}></input>
                </p>
            </div>
            <label style={{color:"#fff"}}>
                <input type="radio" value="normal"/>1mo
            </label>
            <label style={{color:"#fff"}}>
                <input type="radio" value="normal"/>2mos
            </label>
            <label style={{color:"#fff"}}>
                <input type="radio" value="normal"/>3mos
            </label>
            <label style={{color:"#fff"}}>
                <input type="radio" value="normal"/>4mos
            </label>
            <label style={{color:"#fff"}}>
                <input type="radio" value="normal"/>6mos
            </label>
            <label style={{color:"#fff"}}>
                <input type="radio" value="normal"/>12mos
            </label>
        </div>
    )
}

export default RenewSub;