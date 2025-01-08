import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function PCreate() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");
    const[pcAddresss,setPCAddress] = useState("");
    const[cellNum, setCellNum]= useState("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    const handleCellNumChange = (event) => {
        setCellNum(event.target.value)
    }

    const handlePCAddressChange = (event) => {
        setPCAddress(event.target.value)
    }

    function RedirectToDashboard(){
        navigate('/dashboard')
    }
    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <p>Create New Account</p>
            <hr style={{background:"#ffdf00", height: "2px", width: "550px"}}/>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" class="inputData100" onChange={handleLogInUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" class="inputData100" onChange={handleLogInPasswordChange}></input>
            </div>
            <div>
                <label style={{marginLeft:"35px"}}>Email</label>
                <input type="text" placeholder="Enter password" class="inputData100" onChange={handleLogInPasswordChange}></input>
                <label style={{marginLeft:"41px"}}>Age</label>
                <input type="text" placeholder="00/00/0000" class="inputData100"></input>
            </div>
                <hr style={{background:"#ffdf00", height: "2px", width: "550px"}}/>
                <p style={{margin:"5px"}}>Contact Info:</p>
                <hr style={{background:"#ffdf00", height: "2px", width: "550px"}}/>
                <div>
                    <label>Address</label> 
                    <input style={{width:"375px", background:"#fff"}} type="text" placeholder="Enter Addresss" onChange={handlePCAddressChange}></input>
                </div>
                <div>
                    <label>City</label> 
                    <input style={{width:"125px", background:"#fff"}} type="text" placeholder="City"></input>
                    <label>State</label> 
                    <input style={{width:"25px", background:"#fff"}} type="text" placeholder="State"></input>
                </div>
                <div>
                    <label>Zip</label> 
                    <input style={{width:"50px", background:"#fff"}} type="text" placeholder="Zip Code"></input>
                    <label>Cell#</label> 
                    <input style={{width:"125px", background:"#fff"}} type="text" placeholder="(000)000-0000"  onChange={handleCellNumChange}></input>
                </div>
                <hr style={{background:"#ffdd00", height: "2px", width: "550px"}}/>

                <p style={{margin:"5px"}}>Payment Info</p>
                <hr style={{background:"#ffdf00", height: "2px", width: "550px"}}/>
                    <label>Credit Card</label> 
                    <input style={{width:"140px", background:"#fff"}} type="text" placeholder="0000-0000-0000-0000"></input>
                    <label>Exp Date</label> 
                    <input style={{width:"40px", background:"#fff"}} type="text" placeholder="00/00"></input>
                    <label>CSV</label> 
                    <input style={{width:"40px", background:"#fff"}} type="text" placeholder="000"></input>
                    <hr style={{background:"#ffdf00", height: "2px", width: "550px"}}/>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button> 
                <button class='invertButton' onClick={RedirectToDashboard}>Create</button>  
            </p>
        </div>
    ); 
}

export default PCreate;