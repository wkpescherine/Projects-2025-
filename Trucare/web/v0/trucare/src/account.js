import {useState} from "react";

import './App.css';

import Patient from "./components/account/patientprofile"
import Doctor from "./components/account/doctorprofile"

function Account() {
    const[userType,setUserType]= useState("Doctor")

    return (
        <div>
            <div>
                <p>Account Details</p>
            </div>
            {userType === "Patient" && <Patient />}
            {userType === "Doctor" && <Doctor />}
        </div>
    ); 
}

export default Account;