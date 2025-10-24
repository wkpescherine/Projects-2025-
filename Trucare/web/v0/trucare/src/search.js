import React,{useState}from 'react';
import './App.css';
import Doctor from './search_doctor';

function Search() {
    const[occupation,setOccupation] = useState ("");

    function selectOccupation(occ){
        if(occ === occupation){selectOccupation("")}
        else { setOccupation(occ)};
    }
    
    return (
        <div style={{marginTop: "25px"}}>
            <p>Search by:</p>
            <div>
                <label style={{marginRight:"2px", fontSize: "12px", width: "140px"}}>Occupation: {occupation} </label>
                <label style={{marginRight:"2px", fontSize: "12px", width: "80px"}}>City:</label>
                <input type='text' style={{width: "100px"}}></input>
                <label style={{marginRight:"2px", fontSize: "12px", width: "80px"}}>State:</label>
                <input type='text' style={{width: "25px"}}></input>
            </div>
            <div>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Family")}>Family</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Dentist")}>Dentist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Eye")}>Eye</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Allergist")}>Allergist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Therapist")}>Therapist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Psychiatrist")}>Psychiatrist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Trainer")}>Trainer</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}} onClick={() => selectOccupation("Pharmacy")}>Pharmacy</button>
                </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"150px", fontSize:"12px"}}>Doctor</p>
                <p style={{width:"100px", fontSize:"12px"}}>City</p>
                <p style={{width:"50px", fontSize:"12px"}}>State</p>
                <p style={{width:"100px", fontSize:"12px"}}>Zip Code</p>
                <p style={{width:"55px", fontSize:"12px"}}></p>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <Doctor/>
        </div>
    ); 
}

export default Search;