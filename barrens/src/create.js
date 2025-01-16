import React, {useState} from 'react';

function Create (){
    const[newUsername,setNewUsername] = useState ("");
    const[newPassword,setNewPassword] = useState (""); 
    const[newEmail,setNewEmail] = useState("")

    const handleEmailChange = (event) => {
        setNewEmail(event.target.value)
    }

    const handleNewUsernameChange = (event) => {
        setNewUsername(event.target.value)
    }

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
    }
    return(
        <div>
            <div style={{justifyContent: "center"}}>
                <p style={{padding: "3px"}}>
                    <input class="inputField" type="text" placeholder="Create New Username" onChange={handleNewUsernameChange}></input>
                </p>
                <p style={{padding: "3px"}}>
                    <input class="inputField" type="password" placeholder="Create New Password" onChange={handleNewPasswordChange}></input>
                </p>
            </div>
            <div style={{justifyContent: "center"}}>
                <p style={{padding: "3px"}}>
                    <input class="inputField" type="text" placeholder="Enter Email" onChange={handleEmailChange}></input>
                </p>
            </div>
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
            <div>
                <label style={{color:"#fff"}}>
                    <input type="radio" value="normal"/>1mo
                </label>
                <label style={{color:"#fff"}}>
                    <input type="radio" value="normal"/>2mos
                </label>
                <label style={{color:"#fff"}}>
                    <input type="radio" value="normal"/>3mos
                </label>
            </div>
            <div>
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
        </div>
    )
}

export default Create;